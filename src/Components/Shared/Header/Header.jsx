import { Button } from 'flowbite-react';
import React, { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';



const Header = () => {
    const [user, setUser] = useState(null); // Example: null means no user logged in

  const handleSignOut = () => {
    // Handle the sign-out logic
    setUser(null);
    console.log("User signed out");
  };
    
  return (
    <div>
        <Navbar className='shadow-xl p-6' >
      {/* Logo and Brand */}
      <Navbar.Brand>
        <img src="https://i.ibb.co.com/q1yC97q/blogLogo.png" className="w-64" alt="Digital Insights Logo
        " />
        
      </Navbar.Brand>

      {/* Avatar and Dropdown for User Menu */}
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar 
            className='border border-red-500 w-24'
              alt="User settings"
              img={user ? user.image : "https://i.ibb.co.com/KyWtrr4/avatar.jpg"}
              rounded
            />
          }
        >
          {user ? (
            <>
              <Dropdown.Header>
                <span className="block text-sm">{user.name}</span>
                <span className="block truncate text-sm font-medium">{user.email}</span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
            </>
          ) : (
            <>
        <Link to='/login'>
        <Dropdown.Item>Login</Dropdown.Item>
        </Link>

        <Link to='/register'>
        <Dropdown.Item>Register</Dropdown.Item>
        </Link>
              
              
            </>
          )}
        </Dropdown>

        {/* Toggle button for smaller screens */}
        <Navbar.Toggle />
      </div>
      {/* Navbar Links */}
      <Navbar.Collapse>
      <Link to="/">Home</Link>
        
          
        
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default Header;
