const express = require('express')
const router = express.Router()
const { generateToken } = require('../utils/authorization')

router.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    if (username === process.env.USERNAME && password === process.env.PASSWORD) {
        const token = generateToken({ username })
        res.json({
            code: 200,
            msg: '登录成功',
            data: { token }
        })
    } else {
        res.json({
            code: 400,
            msg: '用户名或密码错误',
            data: null
        })
    }
})

module.exports = router
