const {Router} = require('express')
const router = Router()
const {addingController} = require('../controllers/addingController')
router.post('/add',addingController.add)
module.exports=router