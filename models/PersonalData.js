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
  }
})

module.exports = model("personalData", PersonalDataSchema)