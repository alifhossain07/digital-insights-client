import React, { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
import axios from "axios";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-11/12 mb-32 mx-auto">
      <h1 className="text-3xl uppercase font-semibold tracking-wider mb-5">
        Featured <span className="text-yellow-300">Blogs</span>
      </h1>
      <p className="text-xl tracking-wide mb-10">
        Checkout the top articles by our Featured Contributors
      </p>

      <div className="w-11/12 mx-auto grid grid-cols-2 gap-20  ">
        {/* Displaying the first blog prominently */}
        {data.slice(0, 4).map((blog) => (
          
            <Blog key={blog._id} data={blog} />
          
        ))}
        
    
      </div>
    </div>
  );
};

export default FeaturedBlog;
