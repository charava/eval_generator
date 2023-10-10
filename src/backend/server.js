//get the things we need
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const database = require('./database');
// const dotenv = require('dotenv').config()

const app = express()
const port = process.env.PORT || 8082

app.use(cors())
app.use(bodyParser.json())
//moved all API stuff to routes/routes.js
app.use(routes)
// app.use(`${process.env.API_BASE_URL}/routes`)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
