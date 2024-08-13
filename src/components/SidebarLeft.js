import React from 'react';
import petNames from '../assets/pet-names.json';

const SidebarLeft = () => {
  const hashtagCounts = petNames.reduce((acc, pet) => {
    const hashtags = pet.hashtag.split(', ');
    hashtags.forEach((tag) => {
      if (acc[tag]) {
        acc[tag] += 1;
      } else {
        acc[tag] = 1;
      }
    });
    return acc;
  }, {});

  const sortedHashtags = Object.entries(hashtagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return (
    <div className="fixed top-20 right-0 h-[calc(100vh-5rem)] w-60 p-4 bg-gray-100 overflow-hidden">
      <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
      <div className="flex flex-wrap gap-2">
        {sortedHashtags.map(([tag, count]) => (
          <div key={tag} className="bg-blue-100 text-blue-800 py-1 px-3 rounded-lg text-sm font-medium">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarLeft;
