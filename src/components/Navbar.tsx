import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md border-b border-green-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">

    
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent tracking-wide"
        >
          PatientMS
        </Link>

     
        <div className="hidden md:flex space-x-10">
          <Link
            to="/"
            className="text-gray-700 text-lg font-semibold relative group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all"></span>
          </Link>

          <Link
            to="/add-patient"
            className="text-gray-700 text-lg font-semibold relative group"
          >
            Add Patient
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all"></span>
          </Link>

          <Link
            to="/patients"
            className="text-gray-700 text-lg font-semibold relative group"
          >
            View Patients
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all"></span>
          </Link>
        </div>

       {/* mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

   
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-lg border-t border-gray-100 flex flex-col space-y-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 text-lg font-medium hover:text-green-600 transition"
          >
            Home
          </Link>

          <Link
            to="/add-patient"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 text-lg font-medium hover:text-green-600 transition"
          >
            Add Patient
          </Link>

          <Link
            to="/patients"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 text-lg font-medium hover:text-green-600 transition"
          >
            View Patients
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
