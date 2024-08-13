import React, { useState } from 'react';
import petNames from '../assets/pet-names.json';

export default function RankingDeIdeas() {
  const [votes, setVotes] = useState(
    petNames.reduce((acc, pet) => {
      acc[pet.id] = pet.votes;
      return acc;
    }, {})
  );

  const [filter, setFilter] = useState('all');

  const handleVote = (id) => {
    setVotes({
      ...votes,
      [id]: votes[id] + 1
    });
  };

  const sortedPetNames = () => {
    if (filter === 'upvotes') {
      return [...petNames].sort((a, b) => votes[b.id] - votes[a.id]);
    } else if (filter === 'downvotes') {
      return [...petNames].sort((a, b) => votes[a.id] - votes[b.id]);
    }
    return petNames;
  };

  const filteredPetNames = sortedPetNames().filter((pet) => {
    if (filter === 'more') {
      return votes[pet.id] > 10;
    } else if (filter === 'less') {
      return votes[pet.id] <= 10;
    }
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white border border-slate-200 py-6 px-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Los Mejores 10 nombres para tu mascota de 2024</h1>
      <div className="flex justify-center mb-6">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="py-2 px-4 mx-2 rounded-lg bg-gray-200 text-gray-800"
        >
          <option value="all">Todos</option>
          <option value="upvotes">Más votos</option>
          <option value="downvotes">Menos votos</option>
        </select>
      </div>

      {/* Map through filtered petNames array */}
      {filteredPetNames.map((pet) => (
        <div key={pet.id} className="flex justify-between items-center py-3 px-4 mb-3 border last:border-b-0 transition-transform transform hover:scale-105 rounded-lg bg-gray-50 hover:bg-gray-100">
          <div className="flex items-center">
            <div className="w-16 h-16 flex items-center justify-center border border-gray-300 rounded-full mr-4">
              <span role="img" aria-label="pet" className="text-3xl">🐶</span>
            </div>
            <div>
              <span className="block text-lg font-medium">{pet.name}</span>
              <span className="block text-sm text-gray-500">{pet.hashtag}</span>
              <span className="block text-sm text-gray-400">Date Added: {new Date(pet.date).toLocaleDateString()}</span>
              <span className="block text-sm text-gray-400">Votes: {votes[pet.id]}</span>
            </div>
          </div>
          <button
            onClick={() => handleVote(pet.id)}
            className="ml-auto bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Votar
          </button>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        
      ))}
    </div>
  );
}
