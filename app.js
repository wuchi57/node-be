const express = require('express')
const bodyParser = require('body-parser')

// 配置相关
require('dotenv').config()

const cors = require('./router/cors')
const error = require('./router/error')
const pageNotFound = require('./router/pageNotFound')
const login = require('./router/login')
const auth = require('./utils/authorization')

const host = '0.0.0.0'
const port = 8000
const app = express()
// const urlEncode = bodyParser.urlencoded({ extended: false, limit: '50mb' })
const json = bodyParser.json({ limit: '50mb' })

// app.use(urlEncode)
app.use(json)

app.use(cors)
app.use(login)
app.use('/*', auth.verifyToken)
app.use(pageNotFound)
app.use(error)

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`)
})
