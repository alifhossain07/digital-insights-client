import React from 'react';
import { Card } from 'flowbite-react';

const testimonials = [
  {
    name: 'Mehedi Hasan',
    feedback:
      'This platform has been a game-changer for me! The resources and community are top-notch.',
    profilePic: 'https://i.ibb.co.com/fFdTNq2/pp2.jpg', // Placeholder image
    role: 'Web Developer',
  },
  {
    name: 'Rumana Sultana',
    feedback:
      'I found amazing insights here that boosted my career in AI research. Highly recommended!',
    profilePic: 'https://i.ibb.co.com/DDKXtpj/person2.png', // Placeholder image
    role: 'AI Researcher',
  },
  {
    name: 'Kawsar Rahman',
    feedback:
      'The collaboration and knowledge sharing on this platform helped me grow immensely in cloud computing.',
    profilePic: 'https://i.ibb.co.com/YQgh05D/person1.jpg', // Placeholder image
    role: 'Cloud Architect',
  },
];

const Testimonials = () => {
  return (
    <div className='w-11/12 mx-auto py-32 mb-10'>
      <h1 className='lg:text-3xl text-2xl uppercase font-semibold tracking-wider mb-5 '>
        What Our <span className='text-yellow-300'>Users</span> Say
      </h1>
      <p className='lg:text-xl text-lg tracking-wider mb-10 '>
        Hear from our top contributors and users
      </p>

      {/* Grid Layout for Testimonials */}
      <div className='grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {testimonials.map((testimonial, index) => (
          <Card key={index} className='shadow-lg'>
            <div className='flex flex-col items-center'>
              <img
                className='lg:w-24 w-20 h-20 lg:h-24 rounded-full border-4 border-yellow-300 mb-4'
                src={testimonial.profilePic}
                alt={testimonial.name}
              />
              <h2 className='text-xl font-semibold'>{testimonial.name}</h2>
              <p className='text-gray-500'>{testimonial.role}</p>
              <p className='italic text-gray-600 mt-4 text-center'>
                "{testimonial.feedback}"
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
