
import React, { useState } from 'react';
import WeatherDisplay from '@/components/WeatherDisplay';

interface WeatherData {
  location: string;
  temperature: string;
  humidity: string; // Umidade relativa
  pressure: string; // Nova propriedade
  windSpeed: string; // Velocidade do vento
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
  pressure: formData.get('pressure') as string, // Novo campo
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
              <label htmlFor="pressure">Pressão Atmosférica (hPa):</label>
              <input
                type="number"
                id="pressure"
                name="pressure"
                className="form-input"
                min="800"
                max="1100"
                required
              />
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
            const WeatherDisplay = ({ data }: { data: WeatherData }) => (
              <div className="weather-result">
                <h2>Clima para {data.location}</h2>
                <p>🌡️ Temperatura: {data.temperature} °C</p>
                <p>💧 Umidade Relativa: {data.humidity} %</p>
                <p>📈 Pressão Atmosférica: {data.pressure} hPa</p>
                <p>💨 Velocidade do Vento: {data.windSpeed} km/h</p>
                <p>🌥️ Condição: {data.condition}</p>
              </div>
            );


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
