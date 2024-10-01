import { Button } from "flowbite-react";
import React, { useState } from "react";
import { Avatar, Dropdown, Navbar} from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null); // Example: null means no user logged in

  const handleSignOut = () => {
    // Handle the sign-out logic
    setUser(null);
    console.log("User signed out");
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
        <Navbar.Collapse className="lg:ml-10">
          <Link to="/">Home</Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Dropdown className="mt-2" inline label="Blogs">
            <Dropdown.Item>
              <Link to="/blogPage">All Blogs</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/add-blog">Add Blog</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/featured-blogs">Featured Blogs</Link>
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
            />
            <button className="font-semibold bg-yellow-200 py-2 px-4 rounded-lg hover:bg-yellow-300 transition duration-200">
              Search
            </button>
          </div>

          {/* User Profile Dropdown */}
          <Dropdown className="lg:hidden mt-2"
            arrowIcon={false}
            inline
            label={
              <button className="bg-yellow-200 px-2 text-sm lg:hidden py-1">Menu</button>
            }
          >
            
              <>
                
              <Link to='/'><Dropdown.Item>Home</Dropdown.Item></Link>
                <Dropdown.Item>About</Dropdown.Item>
                <Link to='/blogPage'><Dropdown.Item>Blogs</Dropdown.Item></Link>
                
                <Dropdown.Item>Add Blog</Dropdown.Item>
                <Dropdown.Item>Update Blog</Dropdown.Item>
                <Dropdown.Item>Wishlist</Dropdown.Item>
                
              </>
         
          </Dropdown>

          <Dropdown
            arrowIcon={false}
            inline
            label={
              <img
                src={user ? user.image : "https://i.ibb.co/KyWtrr4/avatar.jpg"}
                alt="User settings"
                className="lg:w-14 w-10 rounded-full"
              />
            }
          >
            {user ? (
              <>
                <Dropdown.Header>
                  <span className="block text-sm">{user.name}</span>
                  <span className="block truncate text-sm font-medium">
                    {user.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
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

          {/* Toggle button for smaller screens */}
          
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
