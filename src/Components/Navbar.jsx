import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-500 p-4 fixed w-full top-0 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-white text-3xl font-extrabold tracking-wide">
          Fluffies
        </h1>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a href="#home" className="text-white hover:text-gray-200 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-gray-200 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-200 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-orange-500 p-4 mt-2 rounded-lg shadow-md">
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <a href="#home" className="text-white block text-center hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="text-white block text-center hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white block text-center hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
