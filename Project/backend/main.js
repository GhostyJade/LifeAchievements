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

const data_utils = require('./utils/data_utils')
const DataUtils = new data_utils(shortid, db)

// routes setup
const Achievements = require('./routes/achievements/index')
const Boards = require('./routes/boards/index')

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
Achievements.New(app, DataUtils)

//add new board to the user
Boards.New(app, DataUtils)

//get all user boards
Boards.Get(app, DataUtils)

//get board's achievements
Achievements.Get(app, DataUtils)

//delete the specified board
Boards.Delete(app, DataUtils)

const port = process.env.PORT
app.listen(port, () => { console.log(`Life achievement server listening on port ${port}!`) })