
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudRain, CloudSnow, CloudSun, Sun, CloudDrizzle, CloudLightning, Wind, Thermometer, Droplets, MapPin } from "lucide-react";

interface WeatherData {
  location: string;
  temperature: string;
  humidity: string;
  windSpeed: string;
  condition: string;
}

interface WeatherDisplayProps {
  data: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
  const getWeatherIcon = (condition: string) => {
    const iconMap = {
      'sunny': Sun,
      'cloudy': CloudSun,
      'rainy': CloudRain,
      'drizzle': CloudDrizzle,
      'snowy': CloudSnow,
      'stormy': CloudLightning,
      'windy': Wind
    };
    return iconMap[condition as keyof typeof iconMap] || CloudSun;
  };

  const getWeatherDescription = (condition: string) => {
    const descriptions = {
      'sunny': 'Dia ensolarado com céu limpo',
      'cloudy': 'Parcialmente nublado',
      'rainy': 'Chuva moderada esperada',
      'drizzle': 'Garoa leve durante o dia',
      'snowy': 'Possibilidade de neve',
      'stormy': 'Tempestade com raios',
      'windy': 'Ventos fortes'
    };
    return descriptions[condition as keyof typeof descriptions] || 'Condições climáticas variáveis';
  };

  const getPredictionMessage = () => {
    const temp = parseInt(data.temperature);
    const humidity = parseInt(data.humidity);
    const wind = parseInt(data.windSpeed);

    if (temp > 30 && humidity > 70) {
      return "Dia quente e úmido. Recomenda-se hidratação constante.";
    } else if (temp < 15) {
      return "Temperatura baixa. Vista roupas adequadas.";
    } else if (wind > 25) {
      return "Ventos fortes. Cuidado com objetos soltos.";
    } else if (humidity > 80) {
      return "Alta umidade. Sensação de abafamento.";
    } else {
      return "Condições climáticas favoráveis para atividades ao ar livre.";
    }
  };

  const WeatherIcon = getWeatherIcon(data.condition);

  return (
    <Card className="w-full max-w-md mx-auto mt-6 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg border-blue-200">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold text-blue-800 flex items-center justify-center gap-2">
          <WeatherIcon className="h-6 w-6" />
          Previsão do Tempo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span className="text-lg font-semibold text-blue-800">{data.location}</span>
          </div>
          <WeatherIcon className="h-16 w-16 mx-auto mb-2 text-blue-600" />
          <p className="text-sm text-blue-700">{getWeatherDescription(data.condition)}</p>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <Thermometer className="h-5 w-5 mx-auto mb-1 text-red-500" />
            <div className="text-lg font-bold text-gray-800">{data.temperature}°C</div>
            <div className="text-xs text-gray-600">Temperatura</div>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <Droplets className="h-5 w-5 mx-auto mb-1 text-blue-500" />
            <div className="text-lg font-bold text-gray-800">{data.humidity}%</div>
            <div className="text-xs text-gray-600">Umidade</div>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <Wind className="h-5 w-5 mx-auto mb-1 text-gray-500" />
            <div className="text-lg font-bold text-gray-800">{data.windSpeed}</div>
            <div className="text-xs text-gray-600">km/h</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold text-blue-800 mb-2">Análise e Recomendações:</h3>
          <p className="text-sm text-gray-700">{getPredictionMessage()}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherDisplay;
