import { PersonalData } from "../models/PersonalData"

export const personalDataController = {
  create: async (req, res) => {
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
    try {
      const doc = PersonalData({
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
      const personalData = doc.save()
      res.json(personalData)
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Не удалось сохранить личные данные"
      })
    }
  },
  getOne: async (req, res) => {
    try {
      const postId = req.params.id
    } catch (error) {

    }
  }
}