const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// Weather Integration
router.get('/:location/:date', weatherController.getWeather);  // GET /weather/:location/:date

module.exports = router;
