// src/pages/categoria-de-ideas.js
import React from 'react';
import { Star, Filter, ArrowUpDown } from 'lucide-react';
import petNames from '../assets/pet-names.json';
import Link from 'next/link';

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

// Calculate the number of distinct hashtags in petNames
const numHashtags = Object.keys(petIcons).reduce((acc, pet) => {
  return acc + (petNames.filter(petName => petName.hashtag.includes(pet)).length);
}, 0);

export default function CategoriaDeIdeas() {
  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white border border-slate-200 py-6 px-8 rounded-lg shadow-md">
      {/* Title div */}
      <div className="flex-grow p-10 pb-8 bg-yellow-50/50 border border-yellow-300 rounded-lg">
        <h1 className="text-3xl text-center font-semibold mt-4">Categorias de Nombres de Mascotas</h1>
        <h2 className="text-center text-lg text-slate-600 mt-4">
          Explora entre las <strong>{numHashtags}</strong> categorías de nombre de mascotas mas populares, innovadoras y creativas.
        </h2>
        <div className="w-full mt-4 flex justify-center items-center h-12">
          <label
            htmlFor="searchcategory"
            className="relative w-[95%] max-w-[450px] h-full bg-white border focus:border-2 border-yellow-300 focus:border-yellow-400 rounded-lg"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="absolute left-2.5 top-2.5 text-2xl text-yellow-500 z-10"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
            </svg>
            <input
              placeholder="Buscar categoría ..."
              className="w-full h-full pl-11 py-2 pr-4 rounded-lg text-slate-600 text-lg focus:outline-none outline-none"
              type="text"
              name="search"
            />
          </label>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Object.keys(petIcons).map((pet) => (
          <Link href={`/categoria-de-ideas/${pet}`} key={pet} className="flex flex-col items-center justify-center p-4 bg-white border border-yellow-300 rounded-lg">
            <div className="w-16 h-16 flex items-center justify-center border border-gray-300 rounded-full mb-4">
              <span role="img" aria-label={pet} className="text-3xl">
                {petIcons[pet]}
              </span>
            </div>
            <span className="text-lg font-semibold text-slate-800">{pet[0].toUpperCase() + pet.slice(1)}</span>
            <span className="text-sm text-slate-600">
              Ideas: {petNames.filter((petName) => petName.hashtag.includes(pet)).length}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
