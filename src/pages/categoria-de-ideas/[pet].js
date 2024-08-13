// src/pages/categoria-de-ideas/[pet].js
import { useRouter } from 'next/router';
import petNames from '../../assets/pet-names.json';

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

export default function PetCategory() {
  const router = useRouter();
  const { pet } = router.query;

  if (!pet) {
    return <div>Cargando...</div>;
  }

  const petIdeas = petNames.filter((petName) => petName.hashtag.includes(pet));
  const capitalizedPet = pet[0].toUpperCase() + pet.slice(1);

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white border border-slate-200 py-6 px-8 rounded-lg shadow-md">
      <div className="flex-grow p-10 pb-8 bg-yellow-50/50 border border-yellow-300 rounded-lg">
        <h1 className="text-3xl text-center font-semibold mt-4">
          Nombre de mascotas para {capitalizedPet}
        </h1>
        <div className="w-full grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {petIdeas.map((idea, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 bg-white border border-yellow-300 rounded-lg">
              <div className="w-16 h-16 flex items-center justify-center border border-gray-300 rounded-full mb-4">
                <span role="img" aria-label={pet} className="text-3xl">
                  {petIcons[pet]}
                </span>
              </div>
              <span className="text-lg font-semibold text-slate-800">{idea.name}</span>
              <span className="text-sm text-slate-600">{idea.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
