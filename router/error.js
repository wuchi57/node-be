const express = require('express')
const router = express.Router()

router.use((err, req, res, next) => {
    res.status(500).send(`${err}`)
})

module.exports = router
