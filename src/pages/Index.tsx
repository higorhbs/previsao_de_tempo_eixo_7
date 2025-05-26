
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="weather-container">
        <div className="weather-card">
          <h1 className="weather-title">Previsor de Tempo</h1>
          
          <form className="weather-form">
            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" name="location" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="temperature">Temperature (C):</label>
              <input type="number" id="temperature" name="temperature" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="humidity">Relative Humidity (%):</label>
              <input type="number" id="humidity" name="humidity" className="form-input" min="0" max="100" />
            </div>

            <div className="form-group">
              <label htmlFor="windSpeed">Wind Speed (km/h):</label>
              <input type="number" id="windSpeed" name="windSpeed" className="form-input" min="0" />
            </div>

            <div className="form-group">
              <label htmlFor="condition">Weather Condition:</label>
              <select id="condition" name="condition" className="form-select">
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

      <style jsx>{`
        .weather-container {
          max-width: 400px;
          width: 100%;
          margin: 0 auto;
        }

        .weather-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .weather-title {
          font-size: 24px;
          font-weight: bold;
          color: #dc2626;
          text-align: center;
          margin-bottom: 32px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .weather-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .form-input,
        .form-select {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          background: white;
          transition: all 0.2s ease;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .form-input:focus,
        .form-select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 12px center;
          background-repeat: no-repeat;
          background-size: 16px;
          padding-right: 40px;
          appearance: none;
        }

        .prediction-button {
          width: 100%;
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          font-weight: 600;
          font-size: 16px;
          padding: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 8px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .prediction-button:hover {
          background: linear-gradient(135deg, #b91c1c, #991b1b);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3);
        }

        .prediction-button:active {
          transform: translateY(0);
        }

        @media (max-width: 480px) {
          .weather-card {
            padding: 24px;
            margin: 16px;
          }
          
          .weather-title {
            font-size: 20px;
            margin-bottom: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
