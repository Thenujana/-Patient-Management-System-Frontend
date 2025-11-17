import { Link } from "react-router-dom";
import heroImage from "../assets/patient-hero.png"; 

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

    
      <section className="w-full max-w-6xl flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg p-8 mt-10">
     
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={heroImage}
            alt="Healthcare"
            className="w-80 h-80 object-cover rounded-lg shadow-md"
          />
        </div>

     
        <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">
            Welcome to Patient Management System
          </h1>
          <p className="text-gray-700 text-lg">
            Efficiently manage patient records, appointments, and medical details.
            Add new patients, view existing records, and stay organized with ease.
          </p>
        </div>
      </section>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 w-full max-w-4xl">


        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Add New Patient</h2>
          <p className="text-gray-600 mt-2">
            Register a new patient into the system with personal and medical details.
          </p>
          <Link
            to="/add-patient"
            className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Add Patient
          </Link>
        </div>

     
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">View All Patients</h2>
          <p className="text-gray-600 mt-2">
            See the list of all registered patients and manage their records.
          </p>
          <Link
            to="/patients"
            className="inline-block mt-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            View Patients
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;
