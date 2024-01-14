const Router = require('express')
const router = new Router()
const formController = require('../controllers/formController')

router.post('/', formController.create)

module.exports = router