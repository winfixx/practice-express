const colors = require('colors')

class Middlewares {
    requestTime(req, res, next) {
        req.requestTime = Date.now()
        next()
    }

    logger(req, res, next) {
        console.log(colors.green(`req.time: ${req.requestTime}`))

        next()
    }
}

module.exports = new Middlewares();