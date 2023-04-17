const PersonalData = require('../models/PersonalData.js')
module.exports.personalDataController = {
  createPersonalData: async (req, res) => {
    const { surname,
      name,
      delivery,
      street,
      home,
      flat,
      entrance,
      floor,
      sum,
      email,
      comments, } = req.body
    console.log(req.body);
    try {
      const doc = PersonalData({
        user: req.user.id,
        surname,
        name,
        delivery,
        street,
        home,
        flat,
        entrance,
        floor,
        sum,
        email,
        comments,
      })
      const personalData = await doc.save()
      res.json(personalData)
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        message: "Не удалось сохранить личные данные"
      })
    }
  },
  getOnePersonalData: async (req, res) => {
    try {
      const user = req.user
      console.log(user.id);
      const users = await PersonalData.find({ user: user.id })
      res.json(users)
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        message: "Не удалось запросить личные данные"
      })
    }
  }
}