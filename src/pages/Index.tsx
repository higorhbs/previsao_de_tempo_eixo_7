
import React, { useState } from 'react';
import WeatherForm from '@/components/WeatherForm';
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

  const handlePrediction = (data: WeatherData) => {
    setWeatherData(data);
  };

  return (
    <div className="min-h-screen weather-gradient p-4">
      <div className="container mx-auto max-w-2xl">
        <WeatherForm onPrediction={handlePrediction} />
        {weatherData && <WeatherDisplay data={weatherData} />}
      </div>
    </div>
  );
};

export default Index;
