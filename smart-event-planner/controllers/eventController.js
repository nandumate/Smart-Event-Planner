const Event = require('../models/Event');
const WeatherAnalysis = require('../models/WeatherAnalysis');
const weatherService = require('../services/weatherService');
const scoring = require('../utils/scoring');

// Create a new event
exports.createEvent = async (req, res) => {
  try {
    const { name, location, date, type } = req.body;
    const event = new Event({ name, location, date, type });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
};

// Get all events with weather status (basic)
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};

// Update event
exports.updateEvent = async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update event' });
  }
};

// Analyze weather and link with event
exports.weatherCheck = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });

    const weather = await weatherService.getWeather(event.location, event.date);
    const score = scoring.calculateScore(event.type, weather);

    const analysis = new WeatherAnalysis({
      eventId: event._id,
      weather,
      suitability: scoring.suitabilityLevel(score),
      score
    });

    await analysis.save();
    res.status(200).json(analysis);
  } catch (error) {
    res.status(500).json({ error: 'Weather analysis failed' });
  }
};

// Get weather suitability for event
exports.getSuitability = async (req, res) => {
  try {
    const analysis = await WeatherAnalysis.findOne({ eventId: req.params.id });
    if (!analysis) return res.status(404).json({ error: 'No analysis found' });
    res.status(200).json(analysis);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch suitability' });
  }
};
