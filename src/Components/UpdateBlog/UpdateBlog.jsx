import React, { useContext, useState } from "react";
import { Link, useNavigate, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal, Button } from "flowbite-react"; // Import Flowbite components

const UpdateBlog = () => {
  const { user } = useContext(AuthContext);
  const blogData = useLoaderData(); // Preload blog data
  const navigate = useNavigate();
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const {
    _id,
    image,
    title: initialTitle,
    category: initialCategory,
    author: initialAuthor,
    publishedAt: initialPublishedAt,
    introduction: initialIntroduction,
    body: initialBody,
    conclusion: initialConclusion,
    short_description: initialShortDescription,
    user_email,
  } = blogData;

  // State to manage rich text values
  const [title, setTitle] = useState(initialTitle);
  const [category, setCategory] = useState(initialCategory);
  const [author, setAuthor] = useState(initialAuthor);
  const [publishedAt, setPublishedAt] = useState(initialPublishedAt);
  const [introduction, setIntroduction] = useState(initialIntroduction);
  const [body, setBody] = useState(initialBody);
  const [conclusion, setConclusion] = useState(initialConclusion);
  const [shortDescription, setShortDescription] = useState(initialShortDescription);

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

  const handleUpdateBlog = (event) => {
    event.preventDefault();

    const updatedBlog = {
      title,
      image,
      category,
      author,
      publishedAt,
      introduction,
      body,
      conclusion,
      short_description: shortDescription,
      user_email,
    };

    fetch(`https://digital-insights-server.vercel.app/blogs/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setSuccessModalOpen(true);
        } else {
          setErrorModalOpen(true);
        }
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
        setErrorModalOpen(true);
      });
  };

  const handleSuccessModalClose = () => {
    setSuccessModalOpen(false);
    navigate("/myblogs"); // Navigate to My Blogs page on close
  };

  return (
    <div className="font-mont mb-10">
      <div className="flex flex-col lg:flex-row justify-around py-20">
        <div className="space-y-5 lg:mt-32">
          <h1 className="uppercase font-semibold tracking-wider text-3xl">
            Refresh Your <span className="text-yellow-300">Stories</span>
          </h1>
          <p className="text-xl tracking-wider">
            Edit Your Blogs and Bring Them To Perfection
          </p>
        </div>
        <div className="">
          <img
            className="h-5/6 mx-auto mt-10 lg:mt-0"
            src="https://i.ibb.co.com/pKf9FmN/update-blog.webp"
            alt="Blog Banner"
          />
        </div>
      </div>

      <h1 className="text-center mt-10 lg:text-3xl text-2xl font-semibold uppercase text-black">
        Update Your <span className="text-yellow-300">Blog</span>
      </h1>

      <div className="lg:w-10/12 mx-auto">
        <form onSubmit={handleUpdateBlog} className="space-y-4 rounded-xl lg:p-10 p-4">
          {/* Title */}
          <div>
            <label className="label">
              <span className="text-base label-text">Title</span>
            </label>
            <ReactQuill 
              theme="snow" 
              value={title} 
              onChange={setTitle} 
              modules={quillModules}
              formats={quillFormats}
            />
          </div>

          {/* Category */}
          <div>
            <label className="label">
              <span className="text-base label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Blog Category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-2 input input-bordered"
              required
            />
          </div>

          {/* Author */}
          <div>
            <label className="label">
              <span className="text-base label-text">Author</span>
            </label>
            <input
              type="text"
              placeholder="Author Name"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full mt-2 input input-bordered"
              required
            />
          </div>

          {/* Published Date */}
          <div>
            <label className="label">
              <span className="text-base label-text">Published Date</span>
            </label>
            <input
              type="text"
              placeholder="Published Date"
              name="publishedAt"
              value={publishedAt}
              onChange={(e) => setPublishedAt(e.target.value)}
              className="w-full mt-2 input input-bordered"
              required
            />
          </div>

          {/* Introduction */}
          <div>
            <label className="label">
              <span className="text-base label-text">Introduction</span>
            </label>
            <ReactQuill 
              theme="snow" 
              value={introduction} 
              onChange={setIntroduction} 
              modules={quillModules}
              formats={quillFormats}
            />
          </div>

          {/* Body */}
          <div>
            <label className="label">
              <span className="text-base label-text">Body</span>
            </label>
            <ReactQuill 
              theme="snow" 
              value={body} 
              onChange={setBody} 
              modules={quillModules}
              formats={quillFormats}
            />
          </div>

          {/* Conclusion */}
          <div>
            <label className="label">
              <span className="text-base label-text">Conclusion</span>
            </label>
            <ReactQuill 
              theme="snow" 
              value={conclusion} 
              onChange={setConclusion} 
              modules={quillModules}
              formats={quillFormats}
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="label">
              <span className="text-base label-text">Short Description</span>
            </label>
            <ReactQuill 
              theme="snow" 
              value={shortDescription} 
              onChange={setShortDescription} 
              modules={quillModules}
              formats={quillFormats}
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="label">
              <span className="text-base label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter Image URL"
              name="imageURL"
              defaultValue={image}
              className="w-full mt-2 input input-bordered"
              required
            />
            {image && (
              <img
                src={image}
                alt="Current Blog Image"
                className="mt-4 mb-4 w-96 mx-auto h-60 rounded-lg"
              />
            )}
          </div>

          <input
            type="submit"
            value="Update"
            className="btn py-2 w-full text-xl bg-yellow-400 hover:bg-yellow-300 duration-300 text-white"
          />
        </form>
      </div>

      <Link to="/">
        <div className="text-center">
          <button className="btn bg-gray-200 px-4 py-2 hover:bg-gray-300 duration-300">
            Go To Home
          </button>
        </div>
      </Link>

      {/* Success Modal */}
      <Modal
        show={successModalOpen}
        onClose={handleSuccessModalClose}
      >
        <Modal.Header>Success!</Modal.Header>
        <Modal.Body>
          <p>Your blog has been successfully updated!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSuccessModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Error Modal */}
      <Modal
        show={errorModalOpen}
        onClose={() => setErrorModalOpen(false)}
      >
        <Modal.Header>Error</Modal.Header>
        <Modal.Body>
          <p>There was an error updating your blog. Please try again.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setErrorModalOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateBlog;
