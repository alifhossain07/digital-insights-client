import React from "react";
import { SlCalender } from "react-icons/sl";
import { Card } from "flowbite-react";

const Blog = ({ data }) => {
  const {
    title,
    image,
    short_description,
    category,
    publishedAt,
  } = data;

  return (
    <Card
      className="flex-grow  "
      
    >
      <div className=" flex flex-col flex-grow space-y-5">
      <img src={image} className="h-44 " alt="" />
        <h1 className="text-2xl flex-grow font-semibold text-gray-800">{title}</h1>
        <p className="text-gray-800 flex-grow  text-lg">
          <span className="font-semibold">Category :</span> {category}
        </p>
        <p className="text-lg  text-gray-700 flex-grow min-h-[50px]"> {/* Ensure a minimum height */}
          {short_description}
        </p>
        <div className="flex justify-between items-center flex-grow  mt-auto">
          <p className="flex items-center gap-2 text-gray-800 text-lg">
            <SlCalender /> {publishedAt}
          </p>
          <button className="text-blue-600 underline text-lg">Read More</button>
        </div>
      </div>
    </Card>
  );
};

export default Blog;
