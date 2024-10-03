import React from "react";
import { SlCalender } from "react-icons/sl";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom"; 
import DOMPurify from "dompurify"; // Import DOMPurify

const Blog = ({ data }) => {
  const {
    title,
    image,
    short_description,
    author,
    category,
    publishedAt,
    _id,
  } = data;

  const navigate = useNavigate(); 

  const handleReadMore = () => {
    navigate(`/blog/${_id}`); 
  };

  // Utility function to sanitize HTML content before rendering
  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <Card className="flex-grow">
      <div className="flex flex-col flex-grow space-y-5">
        <img src={image} className="lg:h-64 h-44" alt={title} />
        <h1
          className="lg:text-xl text-lg tracking-wider flex-grow font-semibold text-gray-800"
          dangerouslySetInnerHTML={createMarkup(title)} // Render sanitized title
        />
        <p className="text-gray-800 tracking-wider flex-grow text-base lg:text-lg">
          <span className="font-semibold">Category :</span> {category}
        </p>
        <p className="text-gray-800 tracking-wider flex-grow text-base lg:text-lg">
          <span className="font-semibold">Author :</span> {author}
        </p>
        <p className="text-base lg:text-lg tracking-wider text-gray-700 flex-grow min-h-[50px]"
           dangerouslySetInnerHTML={createMarkup(short_description)} // Render sanitized short description
        />
        <div className="flex justify-between items-center flex-grow mt-auto">
          <p className="flex font-semibold tracking-wider items-center gap-2 text-yellow-300 text-base lg:text-lg">
            <SlCalender /> {publishedAt}
          </p>
          <button
            className="text-yellow-300 underline font-semibold tracking-wider text-base lg:text-lg"
            onClick={handleReadMore} 
          >
            Read More
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Blog;



