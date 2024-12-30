import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between mx-5 p-5">
      {/* Left side - Heading */}
     <Link to='/'>
     <h1 className="text-2xl md:text-3xl text-green-500 font-bold">Tourism</h1>
     </Link>

      {/* Center - Buttons for Desktop */}
      <div className="hidden md:flex items-center space-x-5">
        <Link to="/">
          <button className="bg-slate-600 py-2 px-3 text-white rounded-md text-xs">
            Home
          </button>
        </Link>
        <Link to="/products">
          <button className="py-2 px-3 text-sm rounded-md hover:bg-gray-200">
            All Tourist Spot
          </button>
        </Link>
      </div>

      {/* Right side - Login/Register Buttons */}
      <div className="hidden md:flex items-center space-x-5">
        <Link to="/login">
          <button className="bg-green-500 py-2 px-3 text-white rounded-md text-md hover:bg-white hover:text-green-500 border border-green-500">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-blue-300 py-2 px-3 text-black rounded-md text-md hover:bg-white hover:text-blue-300 border border-blue-300">
            Register
          </button>
        </Link>
      </div>

      {/* Right side - Menu Icon for Mobile */}
      <button
        className="md:hidden text-2xl text-gray-600 focus:outline-none"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Offcanvas Menu for Mobile */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-md z-50">
          <div className="flex justify-end p-5">
            <button
              className="text-2xl text-gray-600 focus:outline-none"
              onClick={toggleMenu}
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col items-start px-5 space-y-5 mt-5">
            <Link to="/">
              <button className="bg-slate-600 py-2 px-3 text-white rounded-md text-xs w-full">
                Home
              </button>
            </Link>

            <Link to="/products">
              <button className="py-2 px-3 text-sm rounded-md hover:bg-gray-200 w-full">
                All Tourist Spot
              </button>
            </Link>

           <Link to='/login'>
           <button className="bg-green-500 py-2 px-3 text-white rounded-md text-md hover:bg-white hover:text-green-500 border border-green-500 w-full">
              Login
            </button>
           </Link>
            <Link to='/register'>
            <button className="bg-blue-300 py-2 px-3 text-black rounded-md text-md hover:bg-white hover:text-blue-300 border border-blue-300 w-full">
              Register
            </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
