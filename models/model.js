const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    description: {
        required: true,
        type: String
    },
    room_number: {
        required: true,
        type: Number
    },
    N: {
      required: false,
      type: Number
    },
    S: {
      required: false,
      type: Number
    },
    E: {
      required: false,
      type: Number
    },
    W: {
      required: false,
      type: Number
    }
})

module.exports = mongoose.model('rooms', dataSchema)