import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Blog2 from "../Blog/Blog2"; // Update the import to use Blog2

const SearchResults = () => {
  const location = useLocation();
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);

  // Extract query from the URL
  const query = new URLSearchParams(location.search).get("query");

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/blogs"); // Adjust with your backend URL
        const data = await response.json();
        setBlogs(data); // Set all blogs to state
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    
    fetchBlogs();
  }, []);

  // Filter blogs based on the search query
  useEffect(() => {
    if (query && blogs.length > 0) {
      const searchResults = blogs.filter((blog) => {
        const titleMatch = blog.title?.toLowerCase().includes(query.toLowerCase());
        const categoryMatch = blog.category?.toLowerCase().includes(query.toLowerCase());
        const descriptionMatch = blog.short_description?.toLowerCase().includes(query.toLowerCase());
        
        return titleMatch || categoryMatch || descriptionMatch;
      });
      setFilteredBlogs(searchResults);
    }
  }, [query, blogs]);

  return (
    <div className="container py-32 h-[1000px] mx-auto p-6">
      <h1 className="text-2xl  font-bold mb-10">Search Results for <span className="text-yellow-300">"{query}"</span></h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <Blog2 key={blog._id} data={blog} /> // Use Blog2 for rendering
          ))
        ) : (
          <p>No blogs found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
