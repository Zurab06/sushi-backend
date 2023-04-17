const { Router } = require('express')
const router = Router()
const { authController } = require('../controllers/authController')
const { check } = require('express-validator')
const authMiddleware = require('../middlewares/authMiddleware')
const roleMiddleware = require('../middlewares/roleMiddleware')

router.post('/registration', [check('username', 'логин не может быть пустым').notEmpty(),
check('password', 'пароль должен быть длинее 5 и не длиннее 20 символов').isLength({ max: 10, min: 5 })
], authController.registration)
router.post('/login', authController.login)
// router.get('/users', roleMiddleware(['USER']), authController.getUsers)

router.get('/auth/me', authMiddleware, authController.isAuth)

module.exports = router