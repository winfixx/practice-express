const Router = require('express')
const serverControll = require('../controllers/server.controll.js')

const router = new Router()

router.get('/api/server', serverControll.getAll)
router.post('/api/server', serverControll.create)
router.delete('/api/server/:id', serverControll.remove)

module.exports = router
