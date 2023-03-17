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
    default: "курьер"
  },
  street: {
    type: String,
    required: true
  },
  home: {
    type: Number,
    required: true
  },
  flat: {
    type: Number,
    required: true
  },
  entrance: {
    type: Number,
    required: true
  },
  floor: {
    type: Number,
    required: true
  },
  code: Number,
  card: {
    type: String,
    default: "Картой",
  },
  sum: Number,
  email: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true
  }
})

const PersonalData = model("personalData", PersonalDataSchema)

module.exports = PersonalData