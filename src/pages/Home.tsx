import { Link } from "react-router-dom";
import heroImage from "../assets/patient-hero.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-0">

     
      <section className="w-full bg-gradient-to-r from-green-50 to-white flex flex-col md:flex-row items-center justify-between p-10 md:p-20 shadow-lg">
        
       
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={heroImage}
            alt="Healthcare"
            className="w-96 h-96 object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>

      
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 mb-6 leading-tight">
            Welcome to Patient Management System
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8">
           Helps to manage the patients easily and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/add-patient"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 text-lg"
            >
              Add Patient
            </Link>
            <Link
              to="/patients"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 text-lg"
            >
              View Patients
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
