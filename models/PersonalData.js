const { Schema, model } = require("mongoose")

const PersonalDataSchema = Schema({
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
    required: true,
    default: "курьер"
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
  code: {
    type: String,
    required: true
  },
  card: {
    type: String,
    required: true,
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