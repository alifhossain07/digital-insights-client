import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("Google user:", user);
        navigate("/"); // Redirect to home page after successful login
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
      });
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log("Logged in user:", user);
        navigate("/"); // Redirect to home page after successful login
      })
      .catch((error) => {
        console.error("Sign-In Error:", error);
      });
  };

  return (
    <section className="">
      <div className="flex flex-col lg:flex-row center justify-around mx-auto">
        <div>
          <div className="space-y-6 mt-14 lg:mt-32 ">
            <h1 className="uppercase text-2xl lg:text-4xl lg:py-8 p-4 font-bold text-[#FFD819] ">
              Sign in to your account
            </h1>
            <p className="lg:text-2xl p-4 lg:p-0 text-xl ">Get Tech Insights For Everyday Life</p>
          </div>
          <p className="text-xl hidden lg:block lg:mt-32 font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <span className="font-bold text-yellow-500 text-lg">
              <Link to="/register"> Sign up</Link>
            </span>
          </p>
        </div>

        <div className="flex flex-col lg:w-4/12 lg:py-20 py-10 mb-7 ">
          <div className="bg-white rounded-lg shadow-xl">
            <div className="p-8 space-y-4">
              <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
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
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
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
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                  )}
                </div>

                <button type="submit" className="w-full text-black bg-[#FFE566] py-3">
                  Sign in
                </button>
              </form>
            </div>
          </div>

          <button onClick={handleGoogleLogin} className="mt-5 flex items-center justify-center gap-4 border hover:bg-gray-200 duration-200 border-yellow-300 py-2 text-lg">
            <FcGoogle className="text-3xl" /> Sign In With Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
