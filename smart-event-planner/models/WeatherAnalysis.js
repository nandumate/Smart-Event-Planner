const mongoose = require('mongoose');

const weatherAnalysisSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  weather: {
    temperature: Number,
    precipitation: Number,
    wind: Number,
    description: String,
  },
  score: {
    type: Number,
    required: true,
  },
  suitability: {
    type: String,
    enum: ['Good', 'Okay', 'Poor'],
    required: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('WeatherAnalysis', weatherAnalysisSchema);
