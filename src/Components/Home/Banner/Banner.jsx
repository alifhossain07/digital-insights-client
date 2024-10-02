import React from "react";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
// slideInterval={5000}
const Banner = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="h-[550px]">
        <Carousel slideInterval={5000}  >
          {/* Slide 1 */}
          <div className="relative h-full">
            {/* Background Image */}
            <img
              src="https://i.ibb.co.com/YDvXjR3/blog-Banner1.jpg"
              alt="Banner 1"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="lg:text-5xl text-2xl tracking-wider uppercase font-bold mb-10">Welcome to Digital<span className="text-yellow-300"> Insights</span> </h1>
              <p className="lg:text-xl tracking-wide mb-10 w-2/3">
                Discover the latest insights and updates in tech, web development, and more.
              </p>
              <button className="bg-yellow-300 text-black text-xs lg:text-base font-semibold px-3 py-1 lg:py-2 lg:px-4 rounded-lg hover:bg-yellow-200 duration-500">
                Learn More
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative h-full">
            <img
              src="https://i.ibb.co.com/7GG3Cp9/blog-Banner2.jpg"
              alt="Banner 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="lg:text-5xl text-2xl tracking-wider uppercase font-bold mb-10">Explore  Blogs By <span className="text-yellow-300">Tech Writers</span></h1>
              <p className="lg:text-xl tracking-wide mb-10 w-2/3">
                Stay updated with the latest trends in web development and technology.
              </p>
              <Link to='/blogPage'>
              <button className="bg-yellow-300 text-black text-xs lg:text-base font-semibold px-3 py-1 lg:py-2 lg:px-4 rounded-lg hover:bg-yellow-200 duration-500">
                Explore blogs
              </button>
              </Link>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative h-full">
            <img
              src="https://i.ibb.co.com/5sxzcpB/blog-Banner3.jpg"
              alt="Banner 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="lg:text-5xl text-2xl tracking-wider uppercase font-bold mb-10">Write Your <span className="text-yellow-300">Own Blog</span></h1>
              <p className="lg:text-xl tracking-wide mb-10 w-2/3">
                Connect with like-minded developers and share your knowledge with the world.
              </p>
              <Link to='/login'><button className="bg-yellow-300 text-black text-xs lg:text-base font-semibold px-3 py-1 lg:py-2 lg:px-4 rounded-lg hover:bg-yellow-200 duration-500">
                Join Us
              </button></Link>
              
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
