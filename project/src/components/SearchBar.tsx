import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-6 py-3 text-white bg-white/20 border border-white/30 rounded-xl 
                   focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20
                   placeholder-white/70 backdrop-blur-sm transition-all duration-300"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 
                   hover:text-white transition-colors duration-300"
        >
          <Search size={24} />
        </button>
      </div>
    </form>
  );
};