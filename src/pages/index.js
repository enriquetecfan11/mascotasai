// src/pages/index.js

const petNames = [
  {
    id: "1",
    name: "Toscano",
    hashtag: "#dog, #puppy, #cute",
    date: "2020-01-01",
  },
  {
    id: "2",
    name: "Bolito",
    hashtag: "#dog, #puppy, #cute",
    date: "2020-02-01",
  },
  {
    id: "3",
    name: "Pirulito",
    hashtag: "#dog, #puppy, #cute",
    date: "2020-03-01",
  },
  {
    id: "4",
    name: "Pirulo",
    hashtag: "#dog, #puppy, #cute",
    date: "2020-04-01",
  },
  {
    id: "5",
    name: "Canelo",
    hashtag: "#dog, #puppy, #cute",
    date: "2020-05-01",
  },
  {
    id: "6",
    name: "Chispa",
    hashtag: "#dog, #puppy, #cute",
    date: "2020-06-01",
  },
  {
    id: "7",
    name: "Nina",
    hashtag: "#dog, #puppy, #cute",
    date: "2020-07-01",
  },
  {
    id: "8",
    name: "Firulais",
    hashtag: "#dog, #puppy, #cute",
    date: "2020-08-01",
  },
  {
    id: "9",
    name: "Luna",
    hashtag: "#dog, #puppy, #cute",
    date: "2020-09-01",
  },
  {
    id: "10",
    name: "Rex",
    hashtag: "#dog, #puppy, #cute",
    date: "2020-10-01",
  },
];


export default function RankingDeIdeas() {
  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white border border-slate-200 py-6 px-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">🐶 36 Nombres de Mascotas generados hoy Martes, 30 de Abril de 2024</h1>
      <h2 className="text-xl font-semibold text-center mb-6">
        Vota por tu nombre de mascota favorito
      </h2>

      {/* Map through petNames array */}
      {petNames.map((pet) => (
        <div key={pet.id} className="flex justify-between items-center py-3 px-4 mb-3 border last:border-b-0 transition-transform transform hover:scale-105 rounded-lg bg-gray-50 hover:bg-gray-100">
          <div className="flex items-center">
            <div className="w-16 h-16 flex items-center justify-center border border-gray-300 rounded-full mr-4">
              <span role="img" aria-label="pet" className="text-3xl">🐶</span>
            </div>
            <div>
              <span className="block text-lg font-medium">{pet.name}</span>
              <span className="block text-sm text-gray-500">{pet.hashtag}</span>
              <span className="block text-sm text-gray-400">Date Added: {new Date(pet.date).toLocaleDateString()}</span>
            </div>
          </div>
          <button className="ml-auto bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
            Votar
          </button>
        </div>
      ))}
    </div>
  );
}
