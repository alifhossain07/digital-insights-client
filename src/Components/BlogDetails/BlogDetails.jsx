import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "flowbite-react";
import { SlCalender } from "react-icons/sl";
import { Spinner } from "flowbite-react";

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blog details by ID
    axios
      .get(`https://digital-insights-server.vercel.app/blogs/${id}`)
      .then((response) => {
        setBlog(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="flex flex-wrap justify-center items-center gap-2 h-[80vh]">
  
  <div className="text-center">
    <Spinner aria-label="Center-aligned spinner example" size="xl" />
  </div>
  
</div>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <Card>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold tracking-wide text-gray-800 mb-4">
            {blog.title}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            <span className="font-semibold">Category:</span> {blog.category}
          </p>
          <p className="text-lg text-gray-600 mb-4">
            <span className="font-semibold">Author:</span> {blog.author}
          </p>
          <p className="text-lg text-gray-600 mb-4">
            <span className="font-semibold">Published On:</span> 
            <span className="flex items-center gap-2">
              <SlCalender /> {blog.publishedAt}
            </span>
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Introduction</h2>
          <p className="text-lg text-gray-700 mb-4">{blog.introduction}</p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Body</h2>
          <p className="text-lg text-gray-700 mb-4">{blog.body}</p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Conclusion</h2>
          <p className="text-lg text-gray-700 mb-4">{blog.conclusion}</p>
        </div>
      </Card>
      <div className="text-center py-10">
      <Link to="/blogPage"><button className="bg-yellow-400 px-4 py-2 hover:bg-yellow-300 duration-400 text-white">Go Back</button></Link>
        
      </div>
    </div>
  );
};

export default BlogDetails;
