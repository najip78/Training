import React, { useState } from 'react';
import { FaTwitter, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import useAuthStore from '../store/AuthStore';

const Header = () => {
  const { user } = useAuthStore();  // Accessing user from Zustand store
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#ffff] border-b fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-xl font-semibold flex items-center">
          <span className="text-gray-800">Mali</span>
          <span className="text-[#ff3c00]">Dev</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-4">
          {['home', 'myLearnings', 'about', 'Contact'].map((item) => (
            <div key={item} className="relative group">
              <button className="text-gray-700 font-medium">{item}</button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white hidden group-hover:block transition-opacity">
                <a href="#" className="block px-4 py-2 text-gray-700 box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;">{item} 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;">{item} 2</a>
              </div>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Social Icons and Sign Up Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1DA1F2] transition-colors">
            <FaTwitter size={18} />
          </a>
          <h3>{user ? user.name : 'Guest'}</h3> 
        </div> 
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white border-t">
          <ul className="space-y-2 py-4 px-6">
            {['Dashboard', 'Apps', 'Pages', 'Components', 'Collections'].map((item) => (
              <li key={item}>
                <a href="#" className="block text-gray-700 font-medium hover:bg-gray-100 rounded-md px-4 py-2">{item}</a>
              </li>
            ))}
            <li className="flex space-x-4 pt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1DA1F2] transition-colors">
                <FaTwitter size={18} />
              </a>
           
              {/* Displaying the user */}
              <div className="bg-black text-white w-6 h-6 flex justify-center items-center rounded-full font-bold">
                {user?.name?.[0] || 'N'} {/* Using first letter of user name or fallback to 'N' */}
              </div>
              <h3>{user ? user.name : 'Guest'}</h3> {/* Display user name or 'Guest' */}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
