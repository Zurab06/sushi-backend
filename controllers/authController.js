const User = require('../models/User.model')
const Role = require('../models/Role.model')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { secret } = require('../config')

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, { expiresIn: '2h' })
}

module.exports.authController = {

    async registration(req, res) {

        const { username, password } = req.body
        try {
            const errors = validationResult(req)
            if (!errors) {
                return res.json(400).json({ message: 'oшибка при регистрации', errors })
            }
            const candidate = await User.findOne({ username })
            if (candidate) {
                return res.status(400).json({ message: 'пользователь с таким логином уже существует' })
            }
            const hashPassword = bcrypt.hashSync(password, 7)
            const userRole = await Role.findOne({ value: 'USER' })
            const user = new User({ username, password: hashPassword, roles: [userRole.value] })
            await user.save()
            return res.json({ message: 'пользователь успешно зарегистрирован' })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'registration error' })
        }
    },
    async login(req, res) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ username })
            if (!user) {
                return res.status(400).json({ message: `пользователь ${username} не найден` })
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({ message: 'введень неверный пароль' })
            }

            const token = generateAccessToken(user._id, user.roles)
            return res.json({ token })
        } catch (error) {
            console.log({ error });
            res.status(400).json({ message: 'username error' })
        }
    },

    async isAuth(req, res) {
        const userId = req.user.id
        try {
            const users = await User.findById(userId)
            res.json(users)
        } catch (error) {
            console.log(error);
        }
    }


}