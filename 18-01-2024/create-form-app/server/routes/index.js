const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const formRouter = require('./formRouter')
const userListRouter = require('./userListRouter')
const authMiddleware = require('../middleware/authMiddleware')

router.use('/user', userRouter)
router.use('/form', authMiddleware,formRouter)
router.use('/userList',authMiddleware,userListRouter)

module.exports = router