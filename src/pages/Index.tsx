
import React, { useState } from 'react';
import WeatherDisplay from '@/components/WeatherDisplay';

interface WeatherData {
  location: string;
  temperature: string;
  humidity: string;
  windSpeed: string;
  condition: string;
}

const Index = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const data: WeatherData = {
      location: formData.get('location') as string,
      temperature: formData.get('temperature') as string,
      humidity: formData.get('humidity') as string,
      windSpeed: formData.get('windSpeed') as string,
      condition: formData.get('condition') as string,
    };

    setWeatherData(data);
  };

  return (
    <div className="weather-page">
      <div className="weather-container">
        <div className="weather-card">
          <h1 className="weather-title">Previsor de Tempo</h1>
          
          <form className="weather-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" name="location" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="temperature">Temperature (C):</label>
              <input type="number" id="temperature" name="temperature" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="humidity">Relative Humidity (%):</label>
              <input type="number" id="humidity" name="humidity" className="form-input" min="0" max="100" required />
            </div>

            <div className="form-group">
              <label htmlFor="windSpeed">Wind Speed (km/h):</label>
              <input type="number" id="windSpeed" name="windSpeed" className="form-input" min="0" required />
            </div>

            <div className="form-group">
              <label htmlFor="condition">Weather Condition:</label>
              <select id="condition" name="condition" className="form-select" required>
                <option value="">Select the Condition</option>
                <option value="sunny">☀️ Ensolarado</option>
                <option value="cloudy">⛅ Nublado</option>
                <option value="rainy">🌧️ Chuvoso</option>
                <option value="drizzle">🌦️ Garoa</option>
                <option value="snowy">❄️ Nevando</option>
                <option value="stormy">⛈️ Tempestuoso</option>
                <option value="windy">💨 Ventoso</option>
              </select>
            </div>

            <button type="submit" className="prediction-button">
              Prediction
            </button>
          </form>
        </div>
      </div>

      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default Index;
