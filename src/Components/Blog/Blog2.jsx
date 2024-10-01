import React from "react";
import { SlCalender } from "react-icons/sl";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Blog2 = ({ data }) => {
  const {
    title,
    image,
    short_description,
    category,
    publishedAt,
    _id, // Assuming you have an ID for each blog
  } = data;

  const navigate = useNavigate(); // Initialize useNavigate

  const handleReadMore = () => {
    navigate(`/blog/${_id}`); // Navigate to the blog detail page
  };

  return (
    <Card>
      <div className="flex items-center">
        <div className="w-1/2 mr-10">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col flex-grow space-y-5">
          <h1 className="text-xl tracking-wider flex-grow font-semibold text-gray-800">{title}</h1>
          <p className="text-gray-800 tracking-wider flex-grow text-lg">
            <span className="font-semibold">Category :</span> {category}
          </p>
          <p className="text-lg tracking-wider text-gray-700 flex-grow min-h-[50px]">
            {short_description}
          </p>
          <div className="flex justify-between items-center flex-grow mt-auto">
            <p className="flex items-center gap-2 text-yellow-300 font-semibold text-lg">
              <SlCalender /> {publishedAt}
            </p>
            <button
              className="text-yellow-300 underline font-semibold text-lg"
              onClick={handleReadMore} // Add click handler
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Blog2;
