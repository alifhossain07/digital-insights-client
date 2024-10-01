import React from 'react';
import { Card } from 'flowbite-react';

const contributors = [
  {
    name: 'Ahsan Rahman',
    bio: 'Tech enthusiast and web developer.',
    profilePic: 'https://i.ibb.co.com/fFdTNq2/pp2.jpg',
  },
  {
    name: 'Sadia Ahmed',
    bio: 'AI researcher and data scientist.',
    profilePic: 'https://i.ibb.co.com/x1Gk5d5/pp1.jpg',
  },
  {
    name: 'Nafisa Khan',
    bio: 'Cloud computing architect and consultant.',
    profilePic: 'https://i.ibb.co.com/YTSfwN0/women1.jpg',
  },
  {
    name: 'Rashedul Islam',
    bio: 'Cybersecurity expert and consultant.',
    profilePic: 'https://i.ibb.co.com/XyH3Mwv/men1.jpg',
  },
];

const TopContributors = () => {
  return (
    <div className="w-11/12 mx-auto py-20">
      <h1 className="text-3xl uppercase font-semibold tracking-wider mb-5">
        Leading <span className="text-yellow-300">Contributors</span>
      </h1>
      <p className="text-xl tracking-wider mb-10">
        Here are the top Contributors of this platform
      </p>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {contributors.map((contributor, index) => (
          <Card
            key={index}
            className="shadow-md hover:shadow-lg mx-auto transition-shadow duration-300"
            style={{ maxWidth: '500px', alignItems: 'center' }} // Smaller card width
          >
            <img
              src={contributor.profilePic}
              alt={contributor.name}
              className="rounded-t-lg"
              style={{ height: '300px', objectFit: 'cover' }} // Smaller image height
            />
            <div className="p-3"> {/* Reduced padding */}
              <h2 className="text-xl mb-3 font-semibold">{contributor.name}</h2> {/* Smaller font size */}
              <p className="text-gray-500 text-base">{contributor.bio}</p> {/* Smaller bio font size */}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopContributors;
