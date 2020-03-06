const express = require('express')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
const app = express()

const port = 8080

app.listen(port, ()=>{console.log(`Example app listening on port ${port}!`)})