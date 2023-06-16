import React from "react";
import { Link } from 'react-router-dom';

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
          <Link className="text-white hover:text-gray-300 px-4 py-2" to="/about">About</Link>
        </li>
        <li>
        <Link className="text-white hover:text-gray-300 px-4 py-2" to="/weather">Weather</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
