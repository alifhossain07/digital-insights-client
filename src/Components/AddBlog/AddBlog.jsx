import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal, Button } from "flowbite-react"; // Import Flowbite components

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  
  // States for each section using Quill
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [body, setBody] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [publishedAt, setPublishedAt] = useState(""); // New state for publishedAt
  const [author, setAuthor] = useState(""); // New state for author
  
  const navigate = useNavigate(); // For navigation after adding a blog

  // Quill toolbar configuration
  const quillModules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline', 'strike'], // Formatting buttons
      [{ 'align': [] }],
      ['link', 'image'], // Adding image functionality
      [{ 'color': [] }, { 'background': [] }], // Text color
      ['clean'], // Clear formatting
    ],
  };

  // Include formats
  const quillFormats = [
    'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'link', 'image', 'color', 'background', 'align'
  ];

  const handleAddBlog = (event) => {
    event.preventDefault();

    const newBlog = {
      title,
      image: imageURL,
      category,
      author,
      publishedAt, // Ensure publishedAt is properly formatted
      introduction,
      body,
      conclusion,
      short_description: shortDescription,
      user_email: user.email, // Use logged-in user's email
    };

    console.log("New Blog Data:", newBlog); // Log new blog data

    fetch("https://digital-insights-server.vercel.app/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => {
        console.log("Response:", res); // Log the response
        return res.json();
      })
      .then((data) => {
        console.log("Data:", data); // Log the returned data
        if (data.insertedId) {
          setSuccessModalOpen(true);
          setTimeout(() => {
            navigate("/"); // Navigate to home on success
          }, 2000);
        } else {
          setErrorModalOpen(true);
        }
      })
      .catch((error) => {
        console.error("Error adding blog:", error);
        setErrorModalOpen(true);
      });
  };

  return (
    <div className="font-mont mb-10">
      <div className="flex flex-col lg:flex-row justify-around py-20">
        <div className="space-y-5 p-4 lg:p-0 lg:mt-32">
          <h1 className="uppercase font-semibold tracking-wider text-2xl lg:text-3xl">
            Share Your <span className="text-yellow-300">Thoughts</span>
          </h1>
          <p className="lg:text-xl text-lg tracking-wider">
            Add Your Blogs and Inspire Others
          </p>
        </div>
        <div className="lg:w-5/12 p-4 lg:p-0 mt-5 lg:mt-0">
          <img
            className="mx-auto"
            src="https://i.ibb.co.com/W01gTnB/blogU.jpg"
            alt="Blog Banner"
          />
        </div>
      </div>

      <h1 className="text-center mt-10 lg:text-3xl text-2xl font-semibold uppercase text-black">
        Add Your <span className="text-yellow-300">Blog</span>
      </h1>
      
      <div className="w-10/12 mx-auto">
        <form onSubmit={handleAddBlog} className="space-y-4 rounded-xl mt-5">
          <div>
            <label className="label">
              <span className="text-base label-text">Title</span>
            </label>
            <ReactQuill 
              value={title}
              onChange={setTitle}
              modules={quillModules}
              formats={quillFormats}
              className="input input-bordered"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Blog Category"
              name="category"
              className="w-full mt-2 input input-bordered"
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Introduction</span>
            </label>
            <ReactQuill 
              value={introduction}
              onChange={setIntroduction}
              modules={quillModules}
              formats={quillFormats}
              className="input input-bordered"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Body</span>
            </label>
            <ReactQuill 
              value={body}
              onChange={setBody}
              modules={quillModules}
              formats={quillFormats}
              className="input input-bordered"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Conclusion</span>
            </label>
            <ReactQuill 
              value={conclusion}
              onChange={setConclusion}
              modules={quillModules}
              formats={quillFormats}
              className="input input-bordered"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Short Description</span>
            </label>
            <ReactQuill 
              value={shortDescription}
              onChange={setShortDescription}
              modules={quillModules}
              formats={quillFormats}
              className="input input-bordered"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Image URL"
              className="w-full mt-2 input input-bordered"
              onChange={(e) => setImageURL(e.target.value)}
              required
            />
          </div>

          {/* Added input for author and publishedAt */}
          <div>
            <label className="label">
              <span className="text-base label-text">Author</span>
            </label>
            <input
              type="text"
              placeholder="Author's Name"
              className="w-full mt-2 input input-bordered"
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Published At</span>
            </label>
            <input
              type="text" // Changed to date input for better UX
              placeholder="Add the Date of writing this blog"
              className="w-full mt-2 input input-bordered"
              onChange={(e) => setPublishedAt(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn w-full bg-yellow-300 py-2 hover:bg-yellow-400 duration-500 mt-5">Add Blog</button>
        </form>

        {/* Success Modal */}
        <Modal
          show={successModalOpen}
          onClose={() => setSuccessModalOpen(false)}
        >
          <Modal.Header>Add Blog</Modal.Header>
          <Modal.Body>
            <p>Your blog has been added successfully!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setSuccessModalOpen(false)}>Okay</Button>
          </Modal.Footer>
        </Modal>

        {/* Error Modal */}
        <Modal
          show={errorModalOpen}
          onClose={() => setErrorModalOpen(false)}
        >
          <Modal.Header>Add Blog</Modal.Header>
          <Modal.Body>
            <p>There was an error adding your blog. Please try again.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setErrorModalOpen(false)}>Okay</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AddBlog;
