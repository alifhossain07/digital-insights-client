import React from "react";
import { Footer as FlowbiteFooter } from "flowbite-react"; // Rename the imported Footer component
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-[350px] ">
      <FlowbiteFooter className="h-full bg-gray-200" container>
        <div className="w-full px-4 lg:px-14">
          {/* Responsive flex layout, vertical stacking on small screens */}
          <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="mb-4 md:mb-0">
              <img
                className="lg:w-64 w-52"
                src="https://i.ibb.co.com/q1yC97q/blogLogo.png"
                alt=""
              />
              <p className="mt-5 text-lg lg:text-xl tracking-wider">
                Get Tech Insights for Everyday Life
              </p>
            </div>
            <div className="grid grid-cols-2 gap-20 sm:grid-cols-3">
              <div className="">
                <FlowbiteFooter.Title
                  className="lg:text-2xl text-yellow-300"
                  title="About"
                />
                <FlowbiteFooter.LinkGroup col>
                  <Link to="/blogPage">Our Blogs</Link>
                  <Link to="/login">Login</Link>

                  <Link to="/register">Register</Link>
                </FlowbiteFooter.LinkGroup>
              </div>
              <div>
                <FlowbiteFooter.Title
                  className="lg:text-2xl text-yellow-300"
                  title="Follow Us"
                />
                <FlowbiteFooter.LinkGroup col>
                  <FlowbiteFooter.Link href="#">GitHub</FlowbiteFooter.Link>
                  <FlowbiteFooter.Link href="#">Discord</FlowbiteFooter.Link>
                </FlowbiteFooter.LinkGroup>
              </div>
              <div>
                <FlowbiteFooter.Title
                  className="text-2xl text-yellow-300"
                  title="Legal"
                />
                <FlowbiteFooter.LinkGroup col>
                  <FlowbiteFooter.Link href="#">
                    Privacy Policy
                  </FlowbiteFooter.Link>
                  <FlowbiteFooter.Link href="#">
                    Terms & Conditions
                  </FlowbiteFooter.Link>
                </FlowbiteFooter.LinkGroup>
              </div>
            </div>
          </div>
          <FlowbiteFooter.Divider className="mt-6" />
          <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center mt-4 sm:mt-0">
            <FlowbiteFooter.Copyright href="#" by="Alif Hossain™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FlowbiteFooter.Icon
                href="#"
                icon={BsFacebook}
                className="text-yellow-300"
              />
              <FlowbiteFooter.Icon
                href="#"
                icon={BsInstagram}
                className="text-yellow-300"
              />
              <FlowbiteFooter.Icon
                href="#"
                icon={BsTwitter}
                className="text-yellow-300"
              />
              <FlowbiteFooter.Icon
                href="#"
                icon={BsGithub}
                className="text-yellow-300"
              />
              <FlowbiteFooter.Icon
                href="#"
                icon={BsDribbble}
                className="text-yellow-300"
              />
            </div>
          </div>
        </div>
      </FlowbiteFooter>
    </div>
  );
};

export default Footer;
