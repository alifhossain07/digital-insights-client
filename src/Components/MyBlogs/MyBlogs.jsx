import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../Providers/AuthProvider";
import axios from "axios";
import { Button, Modal } from "flowbite-react";
import { Card, Spinner } from "flowbite-react";
import { SlCalender } from "react-icons/sl"; // Example icon
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const MyBlogs = () => {
  const { user } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null); // State to hold the selected blog
  const [openDeleteModal, setOpenDeleteModal] = useState(false); // State for delete confirmation modal
  const [blogToDelete, setBlogToDelete] = useState(null); // State to hold the blog to be deleted
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs");

        if (user?.email) {
          // Filter blogs based on the logged-in user's email
          const filteredBlogs = response.data.filter(
            (blog) => blog.user_email === user.email
          );
          setBlogs(filteredBlogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [user]);

  if (loading)
    return (
      <div className="flex flex-wrap justify-center items-center gap-2 h-[80vh]">
        <div className="text-center">
          <Spinner aria-label="Center-aligned spinner example" size="xl" />
        </div>
      </div>
    );

  const handleReadMore = (blog) => {
    setSelectedBlog(blog); // Set the selected blog data
    setOpenModal(true); // Open the modal
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/blogs/${id}`); // Send DELETE request
      // Update the state by filtering out the deleted blog
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      setOpenDeleteModal(false); // Close the delete confirmation modal
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const confirmDelete = (blog) => {
    setBlogToDelete(blog); // Set the blog to be deleted
    setOpenDeleteModal(true); // Open the delete confirmation modal
  };

  return (
    <div className="py-20">
      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row">
        <div className="lg:space-y-3 space-y-8 lg:mt-32 lg:w-1/2">
          <h1 className="uppercase font-semibold tracking-wider text-3xl">
            Welcome! <span className="text-yellow-300"></span>
          </h1>
          <p className="text-xl tracking-wider">
            Here You Can See The Blogs You Have Written and Can Edit or Delete
            Them.
          </p>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            className="h-5/6 mx-auto"
            src="https://i.ibb.co/7GG3Cp9/blog-Banner2.jpg"
            alt="Blog Banner"
          />
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-20">
        <h1 className="text-3xl font-semibold uppercase tracking-wider">
          Your <span className="text-yellow-300">Blogs</span>
        </h1>

        {/* Display the filtered blogs */}
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {blogs.map((blog) => (
              <Card key={blog._id} className="flex-grow">
                <div className="flex flex-col flex-grow space-y-5">
                  <img
                    src={blog.image}
                    className="h-64"
                    alt={blog.title}
                  />
                  <h1 className="text-xl tracking-wider flex-grow font-semibold text-gray-800">
                    {blog.title}
                  </h1>
                  <p className="text-gray-800 tracking-wider flex-grow text-lg">
                    <span className="font-semibold">Category :</span> {blog.category}
                  </p>
                  <p className="text-gray-800 tracking-wider flex-grow text-lg">
                    <span className="font-semibold">Author :</span> {blog.author}
                  </p>
                  <p className="text-lg tracking-wider text-gray-700 flex-grow min-h-[50px]">
                    {blog.short_description}
                  </p>
                  <div className="flex justify-between items-center flex-grow mt-auto">
                    <p className="flex font-semibold tracking-wider items-center gap-2 text-yellow-300 text-lg">
                      <SlCalender /> {blog.publishedAt}
                    </p>
                    <div className="flex gap-5">
                    <Link to={`/updateblog/${blog._id}`}><Button className="bg-yellow-400 hover:!bg-yellow-300 duration-400"  >Update</Button></Link>
                    
                    <Button className="bg-red-500 hover:!bg-red-400 duration-300" onClick={() => confirmDelete(blog)}>
                      Delete
                    </Button>
                    </div>
                    
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-xl">No Blogs Found Start Writing Today!</p>
        )}
      </div>


      

      {/* Modal for delete confirmation */}
      {blogToDelete && (
        <Modal dismissible show={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
          <Modal.Header>Confirm Deletion</Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete the blog titled "{blogToDelete.title}"?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button className="bg-red-500 hover:!bg-red-400 duration-300"  onClick={() => handleDelete(blogToDelete._id)}>
              Yes, Delete
            </Button>
            <Button className="bg-yellow-400 hover:!bg-yellow-300 duration-300" onClick={() => setOpenDeleteModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default MyBlogs;
