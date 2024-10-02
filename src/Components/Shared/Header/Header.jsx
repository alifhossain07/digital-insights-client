import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { AuthContext } from "./../../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search input
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("User signed out");
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign-Out Error:", error);
      });
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/searchresults?query=${searchQuery.trim()}`);
      setSearchQuery("");
    }
  };

  return (
    <div>
      <Navbar className="bg-gray-200 shadow-xl p-6">
        {/* Logo and Brand */}
        <Navbar.Brand>
          <img
            src="https://i.ibb.co.com/q1yC97q/blogLogo.png"
            className="lg:w-64 w-44"
            alt="Digital Insights Logo"
          />
        </Navbar.Brand>

        {/* Navbar Links */}
        <div className="">
          <Navbar.Collapse className=" uppercase lg:ml-10">
            <Link to="/">Home</Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Dropdown className="uppercase mt-2" inline label="BLOG">
              <Dropdown.Item>
                <Link to="/blogPage">All Blogs</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/add-blog">Write New Blog</Link>
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Link href="#">Wishlist</Navbar.Link>
          </Navbar.Collapse>
        </div>

        {/* Avatar and Dropdown for User Menu */}
        <div className="flex items-center gap-2">
          {/* Search Bar - only visible on larger screens */}
          <div className="hidden lg:flex items-center space-x-2">
            <input
              type="search"
              placeholder="Search For A Blog"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search input
            />
            <button
              onClick={handleSearch}
              className="font-semibold bg-yellow-200 py-2 px-4 rounded-lg hover:bg-yellow-300 transition duration-200"
            >
              Search
            </button>
          </div>

          {/* User Profile Dropdown */}
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <img
                src={user?.photoURL || "https://i.ibb.co/KyWtrr4/avatar.jpg"}
                alt="User settings"
                className="lg:w-12 lg:h-12 w-10 rounded-full"
              />
            }
          >
            {user ? (
              <>
                <Dropdown.Header>
                  <span className="block text-sm">{user.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user.email}
                  </span>
                </Dropdown.Header>
                <Link to="/myblogs">
                  {" "}
                  <Dropdown.Item>My Blogs</Dropdown.Item>
                </Link>

                <Dropdown.Item>Add Blog</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Dropdown.Item>Login</Dropdown.Item>
                </Link>

                <Link to="/register">
                  <Dropdown.Item>Register</Dropdown.Item>
                </Link>
              </>
            )}
          </Dropdown>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
