const { Schema, model } = require("mongoose")

const PersonalDataSchema = Schema({
  user: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  delivery: {
    type: String,
    default: "Курьером"
  },
  street: {
    type: String,
    required: true
  },
  home: {
    type: String,
    required: true
  },
  flat: {
    type: String,
    required: true
  },
  entrance: {
    type: String,
    required: true
  },
  floor: {
    type: String,
    required: true
  },
  code: String,
  card: {
    type: String,
    default: "Наличными",
  },
  sum: String,
  oddMoney: false,
  email: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    default: ''
  }
})

const PersonalData = model("personalData", PersonalDataSchema)

module.exports = PersonalData