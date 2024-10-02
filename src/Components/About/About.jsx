import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Card } from "flowbite-react";

const testimonials = [
    {
      id: 1,
      quote: "Digital Insights offers clear and in-depth explanations of complex topics.",
      name: "Tasnim Binte Subah",
      photo: "https://i.ibb.co/x1Gk5d5/pp1.jpg",
    },
    {
      id: 2,
      quote: "A go-to platform for staying updated with the latest in tech and engineering.",
      name: "Yeasin Rafee",
      photo: "https://i.ibb.co/fFdTNq2/pp2.jpg",
    },
    {
      id: 3,
      quote: "The content is engaging and the platform makes learning fun!",
      name: "Arif Hasan",
      photo: "https://i.ibb.co.com/XyH3Mwv/men1.jpg",
    },
    {
        id: 4,
        quote: "The content is engaging and the platform makes learning fun!",
        name: "Suhala Lamia",
        photo: "https://i.ibb.co.com/YTSfwN0/women1.jpg",
      }
  ];

const About = () => {
  return (
    <section className="relative">
      {/* Welcome Section */}
      <div
        className="relative mt-10 lg:h-[24rem] text-white py-20 mb-16 lg:px-16 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('https://i.ibb.co.com/G3tVtpB/aboutblog.jpg')",
        }}
      >
        <div className="lg:max-w-5xl mx-auto lg:p-10 rounded-lg">
          <h1 className="text-2xl lg:text-5xl uppercase font-mont tracking-wider text-white font-bold lg:leading-tight">
          Welcome to {" "}
            <span className="text-yellow-300">Digital Insights</span>
          </h1>
          <p className="text-xl tracking-wider lg:text-2xl font-lora text-[#e5d5a2] mt-6 max-w-3xl mx-auto">
            Learn, Explore and Contribute
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="lg:py-32">
        <div className="flex flex-col lg:flex-row justify-around w-10/12 mx-auto gap-10 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-wider  uppercase">
              Our <span className="text-yellow-300">Story</span> 
            </h2>
            <p className="mt-10 text-lg lg:text-xl font-lora text-gray-600">
              Digital Insights was born out of a passion to simplify complex technology for everyone. We aim to create a platform where learning is accessible and insightful.
            </p>
          </div>
          <div className="lg:w-5/6">
            <img
              src="https://i.ibb.co.com/Fb8LD7n/blog-Banner1.jpg"
              alt="Our Story Image"
              className="shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Focus Areas */}
      
<div className="relative  text-white py-20 lg:py-32 px-6 lg:px-16">
  <div className="w-11/12 mx-auto">
    <h2 className="lg:text-3xl text-2xl font-semibold mb-16  tracking-wider text-[#333] font-mont uppercase">
      Our <span className="text-yellow-300">Focus Areas</span> 
    </h2>
    <div className="grid w-full mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      
      <Card className="hover:scale-105 transition-transform">
        <h3 className="text-2xl tracking-wider font-semibold font-mont mb-4 text-yellow-300">Web Development</h3>
        <ul className="text-lg font-lora text-gray-600 space-y-2">
          <li>• Frontend and Backend Development</li>
          <li>• JavaScript, React, and more</li>
          <li>• Web Design Best Practices</li>
        </ul>
      </Card>
      
      <Card className="hover:scale-105 transition-transform">
        <h3 className="text-2xl tracking-wider font-semibold font-mont mb-4 text-yellow-300">Data Science</h3>
        <ul className="text-lg font-lora text-gray-600 space-y-2">
          <li>• Data Analysis and Visualization</li>
          <li>• Machine Learning Techniques</li>
          <li>• Python and R for Data Science</li>
        </ul>
      </Card>
      
      <Card className="hover:scale-105 transition-transform">
        <h3 className="text-2xl tracking-wider font-semibold font-mont mb-4 text-yellow-300">Cybersecurity</h3>
        <ul className="text-lg font-lora text-gray-600 space-y-2">
          <li>• Security Best Practices</li>
          <li>• Ethical Hacking</li>
          <li>• Protecting Digital Assets</li>
        </ul>
      </Card>
      
      <Card className="hover:scale-105 transition-transform">
        <h3 className="text-2xl tracking-wider font-semibold font-mont mb-4 text-yellow-300">Blockchain</h3>
        <ul className="text-lg font-lora text-gray-600 space-y-2">
          <li>• Decentralized Technologies</li>
          <li>• Cryptocurrencies</li>
          <li>• Blockchain in Business</li>
        </ul>
      </Card>
      
      <Card className="hover:scale-105 transition-transform">
        <h3 className="text-2xl tracking-wider font-semibold font-mont mb-4 text-yellow-300">Cloud Computing</h3>
        <ul className="text-lg font-lora text-gray-600 space-y-2">
          <li>• Cloud Infrastructure</li>
          <li>• AWS, Azure, and Google Cloud</li>
          <li>• Scalable Solutions</li>
        </ul>
      </Card>
      
      <Card className="hover:scale-105 transition-transform">
        <h3 className="text-2xl tracking-wider font-semibold font-mont mb-4 text-yellow-300">Artificial Intelligence</h3>
        <ul className="text-lg font-lora text-gray-600 space-y-2">
          <li>• AI Technologies and Algorithms</li>
          <li>• AI in Everyday Life</li>
          <li>• Neural Networks and Deep Learning</li>
        </ul>
      </Card>
      
    </div>
  </div>
</div>


      {/* Meet the Founder Section */}
      <div className="lg:py-20 py-10">
        <div className=" flex gap-12 lg:gap-0 flex-col-reverse lg:flex-row-reverse w-10/12 mx-auto justify-between items-center">
          <div className="">
            <img
              src="https://i.ibb.co.com/G70TgnJ/myPhoto.jpg"
              alt="Artist"
              className=" h-72 w-72 lg:h-96 lg:w-96 rounded-full border-4 border-yellow
              -600 object-cover mx-auto lg:mx-0"
            />
          </div>
          <div className="lg:w-1/2 space-y-10">
            <h2 className="lg:text-3xl text-2xl tracking-wider font-semibold uppercase ">
              Meet the <span className="text-yellow-300">Artist</span>
            </h2>
            <p className=" lg:text-xl text-lg tracking-wider">
              Hi! I’m the creative force behind Digital Insights. My Goal is to bring the world together! Each of us have different knowledges and this platform is to contribute to the world.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="lg:py-32 pt-20 lg:pt-0 ">
        <div className="container lg:w-10/12 mx-auto px-6">
        <h2 className="lg:text-3xl mb-20 text-2xl tracking-wider font-semibold uppercase ">
              Readers  <span className="text-yellow-300">Review</span>
            </h2>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-xl">
                <div className="flex flex-col lg:flex-row gap-4">
                  <Avatar
                    img={testimonial.photo}
                    rounded
                    size='lg'
                    alt={testimonial.name}
                    className="w-32"
                  />
                  <div>
                    <h5 className="text-xl  tracking-wider font-semibold text-[#333]">
                      {testimonial.name}
                    </h5>
                    <p className=" text-gray-600 tracking-wider italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="font-mont text-center w-10/12 mx-auto py-28">
        <h2 className="text-2xl  lg:text-3xl text-[#333] font-semibold tracking-wider uppercase mb-8">
          Ready to Dive <span className="text-yellow-300">Deeper into Tech?</span> 
        </h2>
        <Link to="/blogPage">
          <button className="btn px-10 text-white py-2 bg-yellow-400 hover:bg-yellow-300 dura">Explore Our Blogs</button>
        </Link>
      </div>
    </section>
  );
};

export default About;
