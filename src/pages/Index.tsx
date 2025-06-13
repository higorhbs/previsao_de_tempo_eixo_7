import React, { useState } from 'react';

interface WeatherData {
  location: string;
  humidity: string;
  pressure: string;
  windSpeed: string;
  predictedTemperature: string;
  algorithm: string;
}
const WeatherDisplay = ({ data }: { data: WeatherData }) => (
  <div className="weather-result">
    <div className="weather-result">
  <h2 className="weather-title">🔍 Previsão ({data.algorithm})</h2>
    <div className="weather-cards">
      <div className="weather-card">
        <span>💧</span>
        <div>Umidade Relativa</div>
        <strong>{data.humidity} %</strong>
      </div>
      <div className="weather-card">
        <span>📈</span>
        <div>Pressão Atmosférica</div>
        <strong>{data.pressure} hPa</strong>
      </div>
      <div className="weather-card">
        <span>💨</span>
        <div>Velocidade do Vento</div>
        <strong>{data.windSpeed} km/h</strong>
      </div>
      <div className="weather-card">
        <span>🌡️</span>
        <div>Temperatura Prevista</div>
        <strong>{data.predictedTemperature} °C</strong>
      </div>
    </div>
  </div>
</div>
);



const Index = () => {
  const [results, setResults] = useState<WeatherData[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const humidity = parseFloat(formData.get('humidity') as string);
    const pressure = parseFloat(formData.get('pressure') as string);
    const windSpeed = parseFloat(formData.get('windSpeed') as string);

    const isDev = import.meta.env.MODE === "development";
    const baseUrl = isDev
      ? "/api"
      : "https://eixo7-api.azurewebsites.net";
    
    const endpoints = [
      { url: `${baseUrl}/predict/mlp`, algorithm: "MLP" },
      { url: `${baseUrl}/predict/randomforest`, algorithm: "Random Forest" },
      { url: `${baseUrl}/predict/decisiontree`, algorithm: "Decision Tree" }
    ];


    try {
      const responses = await Promise.all(
        endpoints.map(async ({ url, algorithm }) => {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              umidade_relativa: humidity,
              pressao_atm: pressure,
              velocidade_vento: windSpeed
            })
          });

          if (!response.ok) throw new Error(`Erro com o algoritmo ${algorithm}`);

          const result = await response.json();

          return {
            location: "Local não especificado",
            humidity: humidity.toString(),
            pressure: pressure.toString(),
            windSpeed: windSpeed.toString(),
            predictedTemperature: parseFloat(result.predicted_temperature).toFixed(2),
            algorithm
          };
        })
      );

      setResults(responses);
    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um erro ao prever a temperatura.");
    }
  };



   return (
    <div className="weather-page">
  <div className="weather-container">
    <div className="weather-card">
      <h1 className="weather-title">Previsor de Tempo</h1>

      <form className="weather-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="humidity">Umidade Relativa (%):</label>
          <input
            type="number"
            id="humidity"
            name="humidity"
            className="form-input"
            min="0"
            max="100"
            step="any"
            required
          />
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
            step="any"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="windSpeed">Velocidade do Vento (km/h):</label>
          <input
            type="number"
            id="windSpeed"
            name="windSpeed"
            className="form-input"
            min="0"
            step="any"
            required
          />
        </div>

        <button type="submit" className="prediction-button">Prever</button>
      </form>
    </div>
  </div>

      {results.length > 0 && (
        <div className="results">
          {results.map((data, index) => (
            <WeatherDisplay key={index} data={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
