const weatherService = require('../services/weatherService');

// Get weather for a specific location and date
exports.getWeather = async (req, res) => {
  try {
    const { location, date } = req.params;
    const weather = await weatherService.getWeather(location, date);
    res.status(200).json(weather);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};
