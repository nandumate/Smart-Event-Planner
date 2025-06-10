const axios = require('axios');
require('dotenv').config();

const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const getWeather = async (location, date) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: location,
        appid: process.env.WEATHER_API_KEY,
        units: 'metric',
      },
    });

    const forecastList = response.data.list;

    const target = forecastList.find(item =>
      item.dt_txt.startsWith(date)
    );

    if (!target) {
      throw new Error('No forecast found for that date');
    }

    const weather = {
      temperature: target.main.temp,
      precipitation: target.pop * 100, // Convert to percentage
      wind: target.wind.speed,
      description: target.weather[0].description,
    };

    return weather;
  } catch (error) {
    console.error('Weather API Error:', error.message);
    throw new Error('Unable to fetch weather');
  }
};

module.exports = { getWeather };
