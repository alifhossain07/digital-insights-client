import React, { useEffect, useState } from "react";
import { Tabs } from "flowbite-react";

import { MdDashboard } from "react-icons/md";
import axios from "axios";
import Blog from "../Blog/Blog";
import { Spinner } from "flowbite-react";

const BlogPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

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
  
</div>;
  if (error) return <p>Error: {error}</p>;

  const filteredBlogs =
    selectedCategory === "All"
      ? data
      : data.filter((blog) => blog.category === selectedCategory);

  return (
    <div>
      {/* Intro Section */}
      <div
        className="relative mt-10 lg:h-[24rem] text-white py-20 mb-16 lg:px-16 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('https://i.ibb.co.com/WV4Z2YZ/blg.png')",
        }}
      >
        <div className="lg:max-w-5xl mx-auto lg:p-10 rounded-lg">
          <h1 className="text-2xl lg:text-5xl uppercase font-mont tracking-wider text-white font-bold lg:leading-tight">
            Explore the Latest{" "}
            <span className="text-yellow-300">Tech Insights</span>
          </h1>
          <p className="text-xl tracking-wider lg:text-2xl font-lora text-[#e5d5a2] mt-6 max-w-3xl mx-auto">
            Read Latest Blogs Crafted by our expert writers and Contributors.
          </p>
        </div>
      </div>
      {/* Blog Section */}
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl tracking-wider uppercase font-semibold mb-10">
          Explore By <span className="text-yellow-300">Category</span>
        </h1>
        <div className="flex lg:flex-row flex-col gap-16">
          <div className="lg:w-8/12">
            <Tabs
              className=" gap-5"
              aria-label="Tabs with underline"
              variant="underline"
            >
              <Tabs.Item
                active
                title="All"
                icon={MdDashboard}
                onClick={() => setSelectedCategory("All")} // Set category to "All"
              >
                <div className="flex flex-col gap-10">
                  {filteredBlogs.slice().reverse().map((blog) => (
                    <Blog key={blog.id} data={blog} />
                  ))}
                </div>
              </Tabs.Item>
              <Tabs.Item
                title="Web Development"
                icon={MdDashboard}
                onClick={() => setSelectedCategory("Web Development")} // Set category to "Web Development"
              >
                <div className="flex flex-col gap-10">
                  {data
                    .filter((blog) => blog.category === "Web Development")
                    .map((blog) => (
                      <Blog key={blog.id} data={blog} />
                    ))}
                </div>
              </Tabs.Item>
              <Tabs.Item
                title="Block Chain"
                icon={MdDashboard}
                onClick={() => setSelectedCategory("Blockchain")} 
              >
                <div className="flex flex-col gap-10">
                  {data
                    .filter((blog) => blog.category === "Blockchain")
                    .map((blog) => (
                      <Blog key={blog.id} data={blog} />
                    ))}
                </div>
              </Tabs.Item>
              <Tabs.Item
                title="Cyber Security"
                icon={MdDashboard}
                onClick={() => setSelectedCategory("Cybersecurity")} 
              >
                <div className="flex flex-col gap-10">
                  {data
                    .filter((blog) => blog.category === "Cybersecurity")
                    .map((blog) => (
                      <Blog key={blog.id} data={blog} />
                    ))}
                </div>
              </Tabs.Item>
              <Tabs.Item
                title="Data Science"
                icon={MdDashboard}
                onClick={() => setSelectedCategory("Data Science")} 
              >
                <div className="flex flex-col gap-10">
                  {data
                    .filter((blog) => blog.category === "Data Science")
                    .map((blog) => (
                      <Blog key={blog.id} data={blog} />
                    ))}
                </div>
              </Tabs.Item>
              <Tabs.Item
                title="Cloud Computing"
                icon={MdDashboard}
                onClick={() => setSelectedCategory("Cloud Computing")} 
              >
                <div className="flex flex-col gap-10">
                  {data
                    .filter((blog) => blog.category === "Cloud Computing")
                    .map((blog) => (
                      <Blog key={blog.id} data={blog} />
                    ))}
                </div>
              </Tabs.Item>
              <Tabs.Item
                title="Artificial Intelligence"
                icon={MdDashboard}
                onClick={() => setSelectedCategory("Artificial Intelligence")} 
              >
                <div className="flex flex-col gap-10">
                  {data
                    .filter((blog) => blog.category === "Artificial Intelligence")
                    .map((blog) => (
                      <Blog key={blog.id} data={blog} />
                    ))}
                </div>
              </Tabs.Item>
              
              
            </Tabs>
          </div>
          <div className="lg:w-4/12">
            <h1 className="text-2xl uppercase font-semibold tracking-wider border-b-4 mt-20 p-2">
              Recent <span className="text-yellow-300">Posts</span>
            </h1>
            <div className="flex mt-6 flex-col gap-5">
              {data.slice(9, 13).reverse().map((blog) => (
                <Blog key={blog.id} data={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
