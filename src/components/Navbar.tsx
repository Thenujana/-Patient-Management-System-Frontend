import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
       
        <Link to="/" className="text-2xl font-bold text-green-700">
          PatientMS
        </Link>

      
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/add-patient"
            className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-300"
          >
            Add Patient
          </Link>
          <Link
            to="/patients"
            className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-300"
          >
            View Patients
          </Link>
        </div>

        
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-3">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-300 "
          >
            Home
          </Link>
          <Link
            to="/add-patient"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-300"
          >
            Add Patient
          </Link>
          <Link
            to="/patients"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-300"
          >
            View Patients
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
