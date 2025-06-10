const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String, // ISO date string
    required: true,
  },
  type: {
    type: String,
    enum: ['sports', 'wedding', 'hiking', 'corporate'],
    required: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);
