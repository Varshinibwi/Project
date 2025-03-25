import React from 'react';
import { Cloud, Droplets, Wind } from 'lucide-react';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  data: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <div className="mt-6 backdrop-blur-md bg-white/20 rounded-2xl p-8 text-white border border-white/30">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            {data.name}, {data.sys.country}
          </h2>
          <p className="text-white/80 text-lg capitalize">{data.weather[0].description}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          className="w-24 h-24 filter brightness-150"
        />
      </div>

      <div className="mt-6">
        <div className="text-6xl font-bold">
          {Math.round(data.main.temp)}°C
        </div>
        <p className="text-white/80 text-xl">
          Feels like {Math.round(data.main.feels_like)}°C
        </p>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <Cloud className="text-white mb-2" size={28} />
          <span className="text-white/80">Weather</span>
          <span className="font-semibold text-lg">{data.weather[0].main}</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <Droplets className="text-blue-300 mb-2" size={28} />
          <span className="text-white/80">Humidity</span>
          <span className="font-semibold text-lg">{data.main.humidity}%</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <Wind className="text-white mb-2" size={28} />
          <span className="text-white/80">Wind</span>
          <span className="font-semibold text-lg">{Math.round(data.wind.speed)} m/s</span>
        </div>
      </div>
    </div>
  );
};