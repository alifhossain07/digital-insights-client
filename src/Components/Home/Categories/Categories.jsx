import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

// Dummy icons for demonstration; you can replace them with actual icons
const icons = {
  webDevelopment: "🌐",
  artificialIntelligence: "🤖",
  cyberSecurity: "🔒",
  dataScience: "📊",
  cloudComputing: "☁️",
  blockchain: "🔗",
};

const categories = [
    {
      name: "Web Development",
      icon: icons.webDevelopment,
      description: "The process of creating websites and web applications that are accessible through the internet.",
    },
    {
      name: "Artificial Intelligence",
      icon: icons.artificialIntelligence,
      description: "The simulation of human intelligence in machines programmed to think and learn like humans.",
    },
    {
      name: "Cyber Security",
      icon: icons.cyberSecurity,
      description: "The practice of protecting systems, networks, and programs from digital attacks and unauthorized access.",
    },
    {
      name: "Data Science",
      icon: icons.dataScience,
      description: "A multidisciplinary field that uses scientific methods, algorithms, and systems to extract insights from structured and unstructured data.",
    },
    {
      name: "Cloud Computing",
      icon: icons.cloudComputing,
      description: "The delivery of computing services over the internet, allowing users to store and access data remotely.",
    },
    {
      name: "Blockchain",
      icon: icons.blockchain,
      description: "A decentralized digital ledger technology that records transactions across many computers securely and transparently.",
    },
  ];
  

const Categories = () => {
  const [openModal, setOpenModal] = useState({ isOpen: false, category: null });

  const handleOpenModal = (category) => {
    setOpenModal({ isOpen: true, category });
  };

  const handleCloseModal = () => {
    setOpenModal({ isOpen: false, category: null });
  };

  return (
    <div className="w-11/12 py-20 mx-auto">
      <h1 className="text-3xl font-semibold mb-5 uppercase tracking-wider">
        Browse <span className="text-yellow-300">Categories</span>
      </h1>
      <p className="text-xl tracking-wider mb-20">
        Find What You are Looking for by checking out our categories
      </p>

      {/* First Row for 4 Categories */}
      <div className="lg:flex hidden   w-11/12 mx-auto gap-10 justify-between mb-10">
        {categories.slice(0, 4).map((category, index) => (
          <div
            key={index}
            className="border p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 w-1/4 h-40" // Set fixed height
            onClick={() => handleOpenModal(category)}
          >
            <div className="text-5xl">{category.icon}</div>
            <p className="mt-2 text-lg font-semibold">{category.name}</p>
          </div>
        ))}
      </div>

      {/* Second Row for Remaining Categories */}
      <div className="lg:flex hidden w-11/12 mx-auto justify-center">
        {categories.slice(4).map((category, index) => (
          <div
            key={index}
            className="border p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 mx-4 w-1/4 h-40" // Set fixed height
            onClick={() => handleOpenModal(category)}
          >
            <div className="text-5xl">{category.icon}</div>
            <p className="mt-2 text-lg font-semibold">{category.name}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-6 justify-between mb-10">
  {categories.map((category, index) => (
    <div
      key={index}
      className="border p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 w-full h-40" // Mobile responsive width
      onClick={() => handleOpenModal(category)}
    >
      <div className="text-5xl">{category.icon}</div>
      <p className="mt-2 text-lg font-semibold">{category.name}</p>
    </div>
  ))}
</div>


      <Modal show={openModal.isOpen} onClose={handleCloseModal}>
        <Modal.Header className="">{openModal.category?.name}</Modal.Header>
        <Modal.Body>
  <div className="space-y-6">
    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {openModal.category?.description}
    </p>
    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Learn more about the opportunities and resources available in {openModal.category?.name}.
    </p>
  </div>
</Modal.Body>

        <Modal.Footer>
          <Button className="bg-yellow-300 text-white px-4 hover:!bg-yellow-200"  onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Categories;
