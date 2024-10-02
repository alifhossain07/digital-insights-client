import React, { useContext, useState } from "react";
import { Link, useNavigate, useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2"; // Removed SweetAlert import
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateBlog = () => {
  const { user } = useContext(AuthContext);
  const blogData = useLoaderData();
  const navigate = useNavigate();
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const {
    _id,
    image,
    title,
    category,
    author,
    publishedAt,
    introduction,
    body,
    conclusion,
    short_description,
    user_email,
  } = blogData;

  const handleUpdateBlog = (event) => {
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

    const updatedBlog = {
      title,
      image,
      category,
      author,
      publishedAt,
      introduction,
      body,
      conclusion,
      short_description,
      user_email,
    };

    fetch(`http://localhost:5000/blogs/${_id}`, {
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
        <div className="space-y-5  lg:mt-32 ">
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
      <div className=" lg:w-10/12 mx-auto">
        <form
          onSubmit={handleUpdateBlog}
          className="space-y-4  rounded-xl lg:p-10 p-4"
        >
          <div className="flex flex-col gap-4 justify-between">
            <div className="">
              <label className="label">
                <span className="text-base label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Enter Blog Title"
                defaultValue={title}
                name="title"
                className="w-full mt-2 input input-bordered"
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
                defaultValue={category}
                className="w-full  mt-2 input input-bordered"
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
                defaultValue={author}
                className="w-full  mt-2 input input-bordered"
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
                defaultValue={publishedAt}
                className="w-full  mt-2 input input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Introduction</span>
              </label>
              <textarea
                placeholder="Enter Blog Introduction"
                name="introduction"
                defaultValue={introduction}
                className="w-full  mt-2 input input-bordered"
                rows="4"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Body</span>
              </label>
              <textarea
                placeholder="Enter Blog Body"
                name="body"
                defaultValue={body}
                className="w-full  mt-2 input input-bordered"
                rows="6"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Conclusion</span>
              </label>
              <textarea
                placeholder="Enter Blog Conclusion"
                name="conclusion"
                defaultValue={conclusion}
                className="w-full  mt-2 input input-bordered"
                rows="4"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Short Description</span>
              </label>
              <textarea
                placeholder="Enter Short Description"
                name="short_description"
                defaultValue={short_description}
                className="w-full  mt-2 input input-bordered"
                rows="2"
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
                defaultValue={image}
                className="w-full  mt-2 input input-bordered"
              />
              {image && (
                <img
                  src={image}
                  alt="Current Blog Image"
                  className="mt-4 mb-4 w-96 mx-auto h-60 rounded-lg"
                />
              )}
            </div>
          </div>

          

          <input
            type="submit"
            value="Update "
            className="btn py-2 w-full text-xl bg-yellow-400 hover:bg-yellow-300 duration-300 text-white"
          />
        </form>
      </div>

      <Link to="/">
        <div className="text-center">
          <button className="btn bg-gray-200 px-4 py-2 hover:bg-gray-300 duration-300">Go To Home</button>
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
            <p className="mt-2">Blog Updated Successfully!</p>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="btn"
                onClick={handleSuccessModalClose}
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
            <p className="mt-2">Failed to update the blog.</p>
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

export default UpdateBlog;
