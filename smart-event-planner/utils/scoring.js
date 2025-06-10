// Calculate score based on event type
const calculateScore = (type, weather) => {
  let score = 0;

  const { temperature, precipitation, wind, description } = weather;

  if (type === 'sports') {
    if (temperature >= 15 && temperature <= 30) score += 30;
    if (precipitation < 20) score += 25;
    if (wind < 20) score += 20;
    if (description.includes('clear') || description.includes('cloud')) score += 25;
  }

  else if (type === 'wedding') {
    if (temperature >= 18 && temperature <= 28) score += 30;
    if (precipitation < 10) score += 30;
    if (wind < 15) score += 25;
    if (description.includes('sun') || description.includes('clear')) score += 15;
  }

  else {
    // Generic scoring
    if (temperature >= 16 && temperature <= 32) score += 25;
    if (precipitation < 25) score += 25;
    if (wind < 18) score += 20;
    if (description.includes('clear')) score += 15;
  }

  return score;
};

// Convert numeric score to label
const suitabilityLevel = (score) => {
  if (score >= 80) return 'Good';
  if (score >= 50) return 'Okay';
  return 'Poor';
};

module.exports = { calculateScore, suitabilityLevel };
