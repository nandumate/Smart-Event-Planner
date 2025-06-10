const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Event Management
router.post('/', eventController.createEvent);           
router.get('/', eventController.getAllEvents);           
router.put('/:id', eventController.updateEvent);         

// Weather Analysis
router.post('/:id/weather-check', eventController.weatherCheck);   
router.get('/:id/suitability', eventController.getSuitability);    

module.exports = router;
