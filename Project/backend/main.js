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

const port = 8080

//middleware setup
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

db.defaults({ users: [] })
	.write()

app.get('/', (req, res) => res.send('Hello World!'))

const validateToken = async (req, res) => {
	const token = req.headers['x-access-token']
	if (!token) {
		res.status(403).json(
			{
				error: "unauthorized"
			}
		)
		return
	}

	jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
		if (err) {
			res.status(403).json(
				{
					error: "unauthorized"
				}
			)
			return
		}
		console.warn(jwt.decode(token))
	})
}

app.get('/test', async (req, res) => {
	validateToken(req, res)

	res.send({ status: 'ok' })
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
		name,
		surname,
		email,
		username,
		password
	}

	console.log(newUser)

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

//new achievements
app.post('/achievements/new', async (req, res) => {
	const title = req.body.title
	const username = req.body.username
	const data = req.body.data

	res.send('ok')
})

app.listen(port, () => { console.log(`Example app listening on port ${port}!`) })