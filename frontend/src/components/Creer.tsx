import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaCloud } from 'react-icons/fa';

const CareerPath = () => {
  const steps = [
    { id: 1, title: "HTML & CSS", icon: <FaHtml5 className="text-[#e34c26]" />, description: "Learn the basics of HTML & CSS to create structure and style for web pages." },
    { id: 2, title: "JavaScript", icon: <FaJs className="text-[#f7df1e]" />, description: "Master JavaScript to add interactivity and control to your websites." },
    { id: 3, title: "Frontend Frameworks", icon: <FaReact className="text-[#61dbfb]" />, description: "Learn frameworks like React to build dynamic and responsive UIs." },
    { id: 4, title: "Backend Development", icon: <FaNodeJs className="text-[#3c873a]" />, description: "Learn backend with Node.js to create server-side logic and APIs." },
    { id: 5, title: "Database Management", icon: <FaDatabase className="text-[#00758f]" />, description: "Understand database systems like MongoDB or SQL to store and manage data." },
    { id: 6, title: "Deployment & DevOps", icon: <FaCloud className="text-[#00758f]" />, description: "Learn cloud services and deployment practices to launch web applications." },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Web Developer Career Path</h2>
        <p className="text-gray-600">Follow this structured path to become a proficient web developer. Each step builds your skills in a logical progression.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="bg-white shadow-lg rounded-lg p-6 flex items-center hover:shadow-2xl transition-shadow duration-200">
            <div className="text-3xl mr-4">{step.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerPath;
