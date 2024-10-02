import React, { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
import axios from "axios";
import Blog2 from "../../Blog/Blog2";
import { Spinner } from "flowbite-react";

const FeaturedBlog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching data when the component mounts
    axios
      .get("http://localhost:5000/blogs")
      .then((response) => {
        setData(response.data); // Update state with fetched data
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        setError(error.message); // Handle error
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex flex-wrap justify-center items-center gap-2 h-[80vh]">
  
  <div className="text-center">
    <Spinner aria-label="Center-aligned spinner example" size="xl" />
  </div>
  </div>
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-11/12 mb-16 py-20 mx-auto">
      <h1 className="lg:text-3xl text-2xl  uppercase font-semibold tracking-wider mb-5">
        Featured <span className="text-yellow-300">Blogs</span>
      </h1>
      <p className="lg:text-xl text-lg tracking-wider mb-10">
        Checkout the top articles by our Featured Contributors
      </p>
      <div className="w-11/12 hidden   mt-10 mx-auto lg:grid lg:grid-cols-1 gap-5  ">
        {/* Displaying the first blog prominently */}
        {data.slice(2, 4).map((blog) => (
          
            <Blog2 key={blog._id} data={blog} />
          
        ))}
      </div>

      <div className="w-11/12 hidden mt-10 mx-auto lg:grid lg:grid-cols-2 gap-20  ">
        {/* Displaying the first blog prominently */}
        {data.slice(0, 2).map((blog) => (
          
            <Blog key={blog._id} data={blog} />
          
        ))}
      </div>
      <div className="w-11/12 lg:hidden mt-10 mx-auto flex flex-col gap-10  ">
        {/* Displaying the first blog prominently */}
        {data.slice(0, 4).map((blog) => (
          
            <Blog key={blog._id} data={blog} />
          
        ))}
      </div>

      

    </div>
  );
};

export default FeaturedBlog;
