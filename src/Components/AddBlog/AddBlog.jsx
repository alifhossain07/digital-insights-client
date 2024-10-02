import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2"; // Removed SweetAlert import
import { AuthContext } from "../../Providers/AuthProvider";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const navigate = useNavigate(); // For navigation after adding a blog

  const handleAddBlog = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const category = form.category.value;
    const author = form.author.value;
    const publishedAt = form.publishedAt.value;
    const introduction = form.introduction.value;
    const body = form.body.value;
    const conclusion = form.conclusion.value;
    const short_description = form.short_description.value;
    const image = form.imageURL.value; // Get image URL from input

    const newBlog = {
      title,
      image,
      category,
      author,
      publishedAt,
      introduction,
      body,
      conclusion,
      short_description,
      user_email: user.email, // Use logged-in user's email
    };

    fetch("https://digital-insights-server.vercel.app/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccessModalOpen(true);
          // Navigate to home after a successful addition
          setTimeout(() => {
            navigate("/");
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
        <div className="space-y-5 p-4 lg:p-0 lg:mt-32 ">
          <h1 className="uppercase font-semibold tracking-wider text-2xl lg:text-3xl">
            Share Your <span className="text-yellow-300">Thoughts</span>
          </h1>
          <p className="lg:text-xl text-lg tracking-wider">
            Add Your Blogs and Inspire Others
          </p>
        </div>
        <div className="lg:w-5/12 p-4 lg:p-0 mt-5 lg:mt-0">
          <img
            className=" mx-auto"
            src="https://i.ibb.co.com/W01gTnB/blogU.jpg"
            alt="Blog Banner"
          />
        </div>
      </div>
      <h1 className="text-center mt-10 lg:text-3xl text-2xl font-semibold uppercase text-black">
        Add Your <span className="text-yellow-300">Blog</span>
      </h1>
      <div className="w-10/12 mx-auto">
        <form
          onSubmit={handleAddBlog}
          className="space-y-4 rounded-xl mt-5 "
        >
          <div className="flex flex-col gap-4 justify-between">
            <div>
              <label className="label">
                <span className="text-base label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Enter Blog Title"
                name="title"
                className="w-full mt-2 input input-bordered"
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
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Author</span>
              </label>
              <input
                type="text"
                placeholder="Author Name"
                name="author"
                 // Use logged-in user's name
                className="w-full mt-2 input input-bordered"
                 // Make it read-only or editable as needed
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Published Date</span>
              </label>
              <input
                type="text"
                placeholder="Published Date"
                name="publishedAt"
                className="w-full mt-2 input input-bordered"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Introduction</span>
              </label>
              <textarea
                placeholder="Enter Blog Introduction"
                name="introduction"
                className="w-full mt-2 input input-bordered"
                rows="4"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Body</span>
              </label>
              <textarea
                placeholder="Enter Blog Body"
                name="body"
                className="w-full mt-2 input input-bordered"
                rows="6"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Conclusion</span>
              </label>
              <textarea
                placeholder="Enter Blog Conclusion"
                name="conclusion"
                className="w-full mt-2 input input-bordered"
                rows="4"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Short Description</span>
              </label>
              <textarea
                placeholder="Enter Short Description"
                name="short_description"
                className="w-full mt-2 input input-bordered"
                rows="2"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter Image URL"
                name="imageURL"
                className="w-full mt-2 input input-bordered"
                required
              />
            </div>
          </div>

          <input
            type="submit"
            value="Add Blog"
            className="btn py-2 w-full text-xl bg-yellow-400 hover:bg-yellow-300 duration-300 text-white"
          />
        </form>
      </div>

      <Link to="/">
        <div className="text-center mt-10">
          <button className="btn bg-gray-200 px-4 py-2 hover:bg-gray-300 duration-300">
            Go To Home
          </button>
        </div>
      </Link>

      {/* Success Modal */}
      <div
        className={`${
          successModalOpen ? "fixed z-10 inset-0 overflow-y-auto" : "hidden"
        }`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-black opacity-30"></div>
          <div className="bg-white rounded-lg p-6 mx-auto z-20">
            <h3 className="text-lg font-bold" id="modal-title">
              Success!
            </h3>
            <p className="mt-2">Blog Added Successfully!</p>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="btn"
                onClick={() => setSuccessModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      <div
        className={`${
          errorModalOpen ? "fixed z-10 inset-0 overflow-y-auto" : "hidden"
        }`}
        aria-labelledby="modal-title-error"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-black opacity-30"></div>
          <div className="bg-white rounded-lg p-6 mx-auto z-20">
            <h3 className="text-lg font-bold" id="modal-title-error">
              Error!
            </h3>
            <p className="mt-2">Failed to add the blog.</p>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="btn"
                onClick={() => setErrorModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
