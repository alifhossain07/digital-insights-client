import React from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import LoginAnimation from "./login.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const Login = () => {
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
        <div className="space-y-6 mt-32 ">
        <h1 className="uppercase text-4xl py-8 font-bold text-[#FFD819] ">
                Sign in to your account
              </h1>
          <p className="text-2xl ">Get Tech Insights For Everyday Life</p>
        </div>
        <p className="text-xl  mt-32 font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <span className="font-bold text-yellow-500 text-lg">
                    <Link to="/register"> Sign up</Link>
                  </span>
                </p>
        </div>

         
        
        <div className="flex flex-col  w-4/12 py-20  mb-7  ">
          <div className=" bg-white rounded-lg shadow-xl  ">
            <div className="p-8 space-y-4  ">
              

              <form className="space-y-10 " onSubmit={handleSubmit(onSubmit)}>
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-4 "
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

                {/* Remember Me Checkbox */}
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Checkbox
                        id="remember"
                        {...register("remember")}
                        className="w-6 h-6 border border-gray-300 rounded bg-gray-50  "
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <Label
                        htmlFor="remember"
                        className="text-gray-500 text-lg "
                      >
                        Remember me
                      </Label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-lg font-medium text-primary-600 hover:underline "
                  >
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full text-black bg-[#FFE566] py-3 "
                >
                  Sign in
                </button>

                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
