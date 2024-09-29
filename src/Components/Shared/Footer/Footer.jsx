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
        <div className="w-full ml-14 mr-14">
          <div className="flex w-full justify-between items-center  ">
            <div className="">
              <FlowbiteFooter.Brand className=""
               
                src="https://i.ibb.co.com/q1yC97q/blogLogo.png"
                alt="Digital Insights"
                name="Flowbite"
              />
              <p className="ml-1 mt-5">Get Tech Insights for Everyday Life</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FlowbiteFooter.Title title="about" />
                <FlowbiteFooter.LinkGroup col>
                  <FlowbiteFooter.Link href="#">Flowbite</FlowbiteFooter.Link>
                  <FlowbiteFooter.Link href="#">
                    Tailwind CSS
                  </FlowbiteFooter.Link>
                </FlowbiteFooter.LinkGroup>
              </div>
              <div>
                <FlowbiteFooter.Title title="Follow us" />
                <FlowbiteFooter.LinkGroup col>
                  <FlowbiteFooter.Link href="#">Github</FlowbiteFooter.Link>
                  <FlowbiteFooter.Link href="#">Discord</FlowbiteFooter.Link>
                </FlowbiteFooter.LinkGroup>
              </div>
              <div>
                <FlowbiteFooter.Title title="Legal" />
                <FlowbiteFooter.LinkGroup col>
                  <FlowbiteFooter.Link href="#">
                    Privacy Policy
                  </FlowbiteFooter.Link>
                  <FlowbiteFooter.Link href="#">
                    Terms &amp; Conditions
                  </FlowbiteFooter.Link>
                </FlowbiteFooter.LinkGroup>
              </div>
            </div>
          </div>
          <FlowbiteFooter.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
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
