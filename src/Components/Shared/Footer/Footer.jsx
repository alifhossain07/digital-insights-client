import React from "react";
import { Footer as FlowbiteFooter } from "flowbite-react"; // Rename the imported Footer component
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <FlowbiteFooter className="bg-gray-200" container>
        <div className="w-full px-4 lg:px-14">
          {/* Responsive flex layout, vertical stacking on small screens */}
          <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="mb-4 md:mb-0">
              <FlowbiteFooter.Brand
                src="https://i.ibb.co.com/q1yC97q/blogLogo.png"
                alt="Digital Insights"
                name="Digital Insights"
              />
              <p className="mt-5">Get Tech Insights for Everyday Life</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <FlowbiteFooter.Title title="About" />
                <FlowbiteFooter.LinkGroup col>
                  <FlowbiteFooter.Link href="#">Flowbite</FlowbiteFooter.Link>
                  <FlowbiteFooter.Link href="#">Tailwind CSS</FlowbiteFooter.Link>
                </FlowbiteFooter.LinkGroup>
              </div>
              <div>
                <FlowbiteFooter.Title title="Follow Us" />
                <FlowbiteFooter.LinkGroup col>
                  <FlowbiteFooter.Link href="#">GitHub</FlowbiteFooter.Link>
                  <FlowbiteFooter.Link href="#">Discord</FlowbiteFooter.Link>
                </FlowbiteFooter.LinkGroup>
              </div>
              <div>
                <FlowbiteFooter.Title title="Legal" />
                <FlowbiteFooter.LinkGroup col>
                  <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
                  <FlowbiteFooter.Link href="#">Terms & Conditions</FlowbiteFooter.Link>
                </FlowbiteFooter.LinkGroup>
              </div>
            </div>
          </div>
          <FlowbiteFooter.Divider className="mt-6" />
          <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center mt-4 sm:mt-0">
            <FlowbiteFooter.Copyright href="#" by="Digital Insights™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
              <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
              <FlowbiteFooter.Icon href="#" icon={BsTwitter} />
              <FlowbiteFooter.Icon href="#" icon={BsGithub} />
              <FlowbiteFooter.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </FlowbiteFooter>
    </div>
  );
};

export default Footer;
