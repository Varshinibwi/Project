import React, { useState } from 'react';
import axios from 'axios';
import { CloudRain } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { WeatherData } from './types/weather';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const API_KEY = '7d568011b5b8e7e0d1ebaf24ad738f81'; // Replace with your OpenWeatherMap API key
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeather = async (city: string) => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric'
        }
      });
      setWeather(response.data);
    } catch (err) {
      setWeather(null);
      setError('City not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center py-12 px-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="text-center mb-8 backdrop-blur-sm bg-white/10 p-6 rounded-2xl">
        <div className="flex items-center justify-center mb-4">
          <CloudRain className="text-white mr-2" size={40} />
          <h1 className="text-4xl font-bold text-white">Weather Dashboard</h1>
        </div>
        <p className="text-white text-opacity-90 text-lg">
          Get real-time weather updates for any city
        </p>
      </div>

      <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl w-full max-w-md">
        <SearchBar onSearch={fetchWeather} />

        {loading && (
          <div className="mt-8 text-white text-center animate-pulse">
            Fetching weather data...
          </div>
        )}

        {error && (
          <div className="mt-8 text-red-100 bg-red-500/30 px-6 py-4 rounded-xl text-center backdrop-blur-sm">
            {error}
          </div>
        )}

        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}

export default App;