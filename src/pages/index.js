import React, { useState, useEffect } from 'react';
import { Star, Filter, ArrowUpDown } from 'lucide-react';
import petNames from '../assets/pet-names.json';

const petIcons = {
  dog: '🐶',
  cat: '🐱',
  rabbit: '🐰',
  parrot: '🦜',
  // Add more as needed
};

export default function ImprovedRankingDeIdeas() {
  const [votes, setVotes] = useState({});
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('votes');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem('petVotes')) || {};
    setVotes(storedVotes);
  }, []);

  const handleVote = (id) => {
    const newVotes = { ...votes, [id]: (votes[id] || 0) + 1 };
    setVotes(newVotes);
    localStorage.setItem('petVotes', JSON.stringify(newVotes));
  };

  const sortedAndFilteredPetNames = () => {
    return petNames
      .filter((pet) => {
        if (searchTerm) {
          return pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pet.hashtag.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return true;
      })
      .sort((a, b) => {
        if (sort === 'votes') return (votes[b.id] || 0) - (votes[a.id] || 0);
        if (sort === 'date') return new Date(b.date) - new Date(a.date);
        return 0;
      })
      .filter((pet) => {
        if (filter === 'more') return (votes[pet.id] || 0) > 10;
        if (filter === 'less') return (votes[pet.id] || 0) <= 10;
        return true;
      });
  };

  const getPetIcon = (hashtags) => {
    const petType = hashtags.find(tag => petIcons[tag.slice(1)]);
    return petIcons[petType?.slice(1)] || '🐾';
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white border border-slate-200 py-6 px-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Los mejores nombres para tu Mascota de 2024</h1>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Filter className="mr-2" />
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="py-2 px-4 rounded-lg bg-gray-100 text-gray-800 border border-gray-300"
          >
            <option value="all">Todos</option>
            <option value="more">Más de 10 votos</option>
            <option value="less">10 votos o menos</option>
          </select>
        </div>

        <div className="flex items-center">
          <ArrowUpDown className="mr-2" />
          <select
            onChange={(e) => setSort(e.target.value)}
            className="py-2 px-4 rounded-lg bg-gray-100 text-gray-800 border border-gray-300"
          >
            <option value="votes">Ordenar por votos</option>
            <option value="date">Ordenar por fecha</option>
          </select>
        </div>
      </div>

      <input
        type="text"
        placeholder="Buscar nombres o etiquetas..."
        className="w-full py-2 px-4 mb-6 rounded-lg bg-gray-100 border border-gray-300"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {sortedAndFilteredPetNames().map((pet) => (
        <div key={pet.id} className="flex justify-between items-center py-4 px-6 mb-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:scale-102">
          <div className="flex items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full mr-4 text-3xl">
              {getPetIcon(pet.hashtag.split(','))}
            </div>
            <div>
              <span className="block text-xl font-semibold">{pet.name}</span>
              <span className="block text-sm text-gray-500">{pet.hashtag}</span>
              <span className="block text-sm text-gray-400">
                Añadido: {new Date(pet.date).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center mb-2">
              <Star className="text-yellow-400 mr-1" />
              <span className="font-bold">{votes[pet.id] || 0}</span>
            </div>
            <button
              onClick={() => handleVote(pet.id)}
              className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Votar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}