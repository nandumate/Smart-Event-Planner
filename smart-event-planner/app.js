const express = require('express');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/events', eventRoutes);
app.use('/weather', weatherRoutes);

module.exports = app;
