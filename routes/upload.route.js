const { Router } = require('express')
const fileMiddleware = require("../middlewares/file")
const router = Router()


const { addingController } = require('../controllers/addingController')




router.post('/upload', fileMiddleware.single('avatar'), addingController.add)


module.exports = router