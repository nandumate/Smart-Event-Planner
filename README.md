# 🌤️ Smart Event Planner – Backend API

A backend service that helps users plan **outdoor events** by analyzing **real-time weather data** using the OpenWeatherMap API. The system suggests **suitable dates** for events like sports matches, weddings, hiking trips, and corporate outings.

---

## 📌 Features

- 🔧 Create and manage events with location and type  
- ☁️ Fetch 5-day weather forecasts using OpenWeatherMap  
- 📊 Analyze weather suitability (Good / Okay / Poor)  
- ✅ Suggest better alternative dates (optional)  
- 💡 Modular and scalable backend structure using Node.js and Express  

---

## 🧱 Tech Stack

| Layer          | Technology            |
|----------------|-----------------------|
| Language       | Node.js (JavaScript)  |
| Framework      | Express.js            |
| Database       | MongoDB with Mongoose |
| Weather API    | OpenWeatherMap        |
| Architecture   | MVC (Model-View-Controller) |

---

## 🔗 API Endpoints

### 📁 Event Management
| Method | Endpoint                     | Description                     |
|--------|------------------------------|---------------------------------|
| POST   | `/events`                    | Create a new event              |
| GET    | `/events`                    | Get all events                  |
| PUT    | `/events/:id`                | Update event details            |

### ☁️ Weather Integration
| Method | Endpoint                            | Description                                |
|--------|-------------------------------------|--------------------------------------------|
| GET    | `/weather/:location/:date`          | Get weather forecast for location/date     |
| POST   | `/events/:id/weather-check`         | Analyze weather for existing event         |

### 📊 Suitability Score
| Method | Endpoint                            | Description                                |
|--------|-------------------------------------|--------------------------------------------|
| GET    | `/events/:id/suitability`           | Get suitability score for an event         |

---

## 🛠️ Setup Instructions



```bash
git clone https://github.com/your-username/smart-event-planner.git
cd smart-event-planner

### 2. Install Dependencies

```bash
npm install

### 3. Create .env File

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/smart-event-planner
WEATHER_API_KEY=your_openweathermap_api_key

### 4. Start MongoDB (If using local MongoDB)

mongod

### 5. Start the Server
npm start

