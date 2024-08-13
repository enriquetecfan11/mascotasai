import React from 'react';
import { format } from 'date-fns';
import petNames from '../assets/pet-names.json';

const petIcons = {
  dog: '🐶',
  cat: '🐱',
  rabbit: '🐰',
  parrot: '🦜',
  fish: '🐠',
  hamster: '🐹',
  turtle: '🐢',
  horse: '🐴',
  snake: '🐍',
  bird: '🐦',
  pig: '🐷',
  cow: '🐮',
};

const today = new Date();
const formattedDate = format(today, 'yyyy-MM-dd'); // Ensure the format matches the JSON date format

export default function TodasLasIdeas() {
  const todayPetNames = petNames.filter(pet => pet.date === formattedDate);

  return (
    <div className='max-w-4xl mx-auto mt-8 bg-white border border-slate-200 py-6 px-8 rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold mb-6 text-center'>10 Ideas de nombres generadas hoy {format(today, 'dd/MM/yyyy')}</h1>
      <div>
        {todayPetNames.length > 0 ? (
          todayPetNames.map(pet => (
            <div key={pet.id} className='flex justify-between items-center py-3 px-4 mb-3 border rounded-lg bg-gray-50'>
              <div className='flex items-center'>
                <div className='w-16 h-16 flex items-center justify-center border border-gray-300 rounded-full mr-4'>
                  <span role="img" aria-label="pet" className="text-3xl">
                    {petIcons[pet.hashtag.split(', ')[0].slice(1)] || '🐾'}
                  </span>
                </div>
                <div>
                  <span className='block text-lg font-medium'>{pet.name}</span>
                  <span className='block text-sm text-gray-500'>{pet.hashtag}</span>
                  <span className='block text-sm text-gray-400'>Votes: {pet.votes}</span>
                </div>
              </div>
              <button className='ml-auto bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors'>
                Votar
              </button>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500'>No hay ideas generadas para hoy.</p>
        )}
      </div>
    </div>
  );
}
