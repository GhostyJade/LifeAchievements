require('dotenv').config()

const express = require('express')
const cors = require('cors')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const helmet = require('helmet')
const morgan = require('morgan')
const crypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const adapter = new FileSync('db.json')
const shortid = require('shortid')
const db = low(adapter)
const app = express()

const validationFactory = require('./classes/validation_util')

const port = 8080

//middleware setup
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

db.defaults({ users: [], boards: [] })
	.write()

app.get('/', (req, res) => res.send('Hello World!'))

const validateToken = async (req, res) => {
	const token = req.headers['x-access-token']
	var errorCode = 0
	var status = true

	if (!token) {
		errorCode = 403
		status = false
	}

	jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
		if (err) {
			errorCode = 403
			status = false
		}
	})
	return validationFactory(status, errorCode)
}

app.get('/test', async (req, res) => {
	const result = await validateToken(req, res)
	console.log(result)
	res.send(result)
})

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
		password
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
app.post('/achievements/', async (req, res) => {
	const title = req.body.title
	const username = req.body.username
	const data = req.body.data
	console.log(title, username, data)
	res.send('ok')
})

app.listen(port, () => { console.log(`Example app listening on port ${port}!`) })