import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../Providers/AuthProvider"; // Import the AuthContext
import { updateProfile } from "firebase/auth"; // Import updateProfile

const Register = () => {
  const { createUser } = useContext(AuthContext); // Get createUser from context
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate(); // To redirect after successful registration

  // Handle form submission
  const onSubmit = (data) => {
    const { email, password, name, photoURL } = data;
    
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // Use updateProfile to set displayName and photoURL
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL, // Set the photoURL during registration
        }).then(() => {
          console.log("Profile updated");
          navigate("/"); // Redirect to home page after registration
        }).catch((error) => {
          console.error("Error updating profile:", error.message);
        });
      })
      .catch((error) => {
        console.error("Error during registration:", error.message);
      });
  };

  return (
    <section className="">
      <div className="flex flex-col lg:flex-row justify-around mx-auto">
        <div className="text-center lg:text-left">
          <div className="space-y-6 mt-14 lg:mt-32">
            <h1 className="uppercase text-2xl lg:text-4xl lg:py-8 p-4 font-bold text-[#FFD819]">
              Create an account
            </h1>
            <p className="lg:text-2xl p-4 lg:p-0 text-xl">
              Get Tech Insights For Everyday Life
            </p>
          </div>
          <p className="text-xl hidden lg:block lg:mt-32 font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <span className="font-bold text-yellow-500 text-lg">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>

        <div className="flex flex-col lg:w-4/12 lg:py-20 py-10 mb-7">
          <div className="bg-white rounded-lg shadow-xl">
            <div className="p-8 space-y-4">
              <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
                {/* Name and PhotoURL Fields */}
                <div className="flex flex-col lg:flex-row gap-5">
                  <div className="w-full">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-4"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="photoURL"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Photo URL
                    </label>
                    <input
                      type="text"
                      id="photoURL"
                      placeholder="Place Your Photo URL"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-4"
                      {...register("photoURL", { required: "Photo URL is required" })}
                    />
                    {errors.photoURL && (
                      <p className="text-red-500 text-sm">
                        {errors.photoURL.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="name@company.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-4"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-4"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full text-black bg-[#FFE566] py-3"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>

          <p className="text-xl lg:hidden mt-10 p-4 font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <span className="font-bold text-yellow-500 text-lg">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
