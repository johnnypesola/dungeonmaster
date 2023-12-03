const mongoose = require('mongoose');

const doorSchema = new mongoose.Schema({
  to_room: {
    required: true,
    type: Number
  },
  magic_word: {
    required: false,
    type: String
  }
});

const dataSchema = new mongoose.Schema({
    description: {
        required: true,
        type: String
    },
    room_number: {
        required: true,
        type: Number
    },
    N: doorSchema,
    S: doorSchema,
    E: doorSchema,
    W: doorSchema
})

module.exports = mongoose.model('rooms', dataSchema)