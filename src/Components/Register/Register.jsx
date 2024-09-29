import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  // Initialize React Hook Form methods
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <section className="">
      <div className="flex center justify-around mx-auto">
        <div>
          <div className="space-y-6 mt-32">
            <h1 className="uppercase text-4xl py-8 font-bold text-[#FFD819]">
              Create an account
            </h1>
            <p className="text-2xl">Get Tech Insights For Everyday Life</p>
          </div>
          <p className="text-xl mt-32 font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <span className="font-bold text-yellow-500 text-lg">
              <Link to="/login"> Login</Link>
            </span>
          </p>
        </div>

        <div className="flex flex-col w-5/12 py-20 ">
          <div className="bg-white rounded-lg shadow-xl">
            <div className="p-8 space-y-4">
              <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
                {/* Name Field */}
                <div className="flex justify-between gap-5">
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
                    required
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Country Field */}
                <div className="w-full">
                  <label
                    htmlFor="country"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    placeholder="Your country"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-4"
                    required
                    {...register("country", {
                      required: "Country is required",
                    })}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm">
                      {errors.country.message}
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
                    required
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Invalid email format",
                      },
                    })}
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
                    required
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
        </div>
      </div>
    </section>
  );
};

export default Register;
