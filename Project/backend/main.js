require('dotenv').config()

// middleware requirements
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()

// DB requirements
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

// utils requirements
const shortid = require('shortid')
const crypt = require('bcrypt')

const data_utils = require('./classes/utils/data_utils')
const DataUtils = new data_utils(shortid, db)

// routes setup
const newBoard = require('./classes/routes/boards/new')
const getBoards = require('./classes/routes/boards/get')
const deleteBoard = require('./classes/routes/boards/delete')
const getAchievements = require('./classes/routes/achievements/get')
const newAchievement = require('./classes/routes/achievements/new')

//middleware setup
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

db.defaults({ users: [], boards: [] })
	.write()

//registrate new user
app.post('/users', async (req, res) => {
	const { username, usrPassword, name, surname, email } = req.body
	if (db.get("users").find({ username: username }).size().value() > 0) {
		res.status(400).send({
			error: "user alredy exists"
		})
		return
	}

	const password = await crypt.hash(usrPassword, 8)

	const newUser = {
		"id": shortid.generate(),
		name,
		surname,
		email,
		username,
		password,
		boards: []
	}

	db.get('users').push(newUser).write()

	res.send({ registered: true, data: { username } })
})

//login existing user
app.post('/users/:username', async (req, res) => {
	const username = req.params.username
	const password = req.body.password

	const user = db.get('users').find({ username }).value()
	if (user) {
		const authenticated = await crypt.compare(password, user.password)

		const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: 86400 })
		res.send({ authenticated, token })
	} else {
		res.send({ authenticated: false, error: "user doesn't exists." })
	}
})

//add new achievements
newAchievement(app, DataUtils)

//add new board to the user
newBoard(app, DataUtils)

//get all user boards
getBoards(app, DataUtils)

//get board's achievements
getAchievements(app, DataUtils)

//delete the specified board
deleteBoard(app, DataUtils)

const port = process.env.PORT
app.listen(port, () => { console.log(`Life achievement server listening on port ${port}!`) })