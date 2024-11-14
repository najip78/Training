import React from 'react';

export default function Footer() {
  return (
    <footer className="border-[#c0ccda] box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;  py-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between space-y-4 md:space-y-0">
        {/* Left Section */}
        <p className="text-center md:text-left text-sm">
          © 2023 DashForge v1.0.0. Created by ThemePixels
        </p>

        {/* Right Section */}
        <div className="flex space-x-4">
          <a href="#licenses" className="hover:text-white text-sm">
            Licenses
          </a>
          <a href="#changelog" className="hover:text-white text-sm">
            Change Log
          </a>
          <a href="#help" className="hover:text-white text-sm">
            Get Help
          </a>
        </div>
      </div>
    </footer>
  );
}

