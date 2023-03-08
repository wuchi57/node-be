const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY

/** 生成token **/
module.exports.generateToken = function (payload) {
    const token =
        'Bearer ' +
        jwt.sign(payload, secretKey, {
            expiresIn: '7d'
        })
    return token
}

/** 验证token **/
module.exports.verifyToken = function (req, res, next) {
    const token = req.headers?.authorization?.split(' ')[1]
    jwt.verify(token, secretKey, function (err, decoded) {
        if (err) {
            console.log('verify error', err)
            return res.json({
                code: 401,
                msg: '登录过期',
                data: null
            })
        }
        next()
    })
}
