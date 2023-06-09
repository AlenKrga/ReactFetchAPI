import React from "react";

const Sidenav = () => {
  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-center">
        <li>
          <a href="/" className="text-white hover:text-gray-300 px-4 py-2">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-white hover:text-gray-300 px-4 py-2">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-gray-300 px-4 py-2">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
