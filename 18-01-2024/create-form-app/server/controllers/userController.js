const apiError = require('../error/apiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/model')

const generateJwt = (id, email) => {
    return jwt.sign(
        {id, email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {name,email, password} = req.body
        if (!email || !password) {
            return next(apiError.badRequest('Incorrect email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(apiError.badRequest('A user with this email already exists'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({name,email, password: hashPassword})
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }


    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(apiError.internal('User is not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(apiError.internal('Incorrect password specified'))
        }
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }


    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email)
        return res.json({token})
    }
}

module.exports = new UserController()