const { Router } = require('express')
const { personalDataController } = require('../controllers/personalDataController.js')
const authMiddleware = require('../middlewares/authMiddleware.js')

const router = Router()

router.post("/personalData", authMiddleware, personalDataController.createPersonalData)
router.get('/personalData', authMiddleware, personalDataController.getOnePersonalData)

module.exports = router