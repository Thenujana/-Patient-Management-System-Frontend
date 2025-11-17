import { Link } from "react-router-dom";
import heroImage from "../assets/patient-hero.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col">
      <Navbar />

        <section className="flex flex-col md:flex-row items-center bg-green-50 p-10 md:p-20">
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h1 className="text-4xl font-bold text-gray-800">Manage Patients Effortlessly</h1>
      <p className="mt-4 text-gray-600">Track appointments, health records, and patient progress in one place.</p>
      <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Get Started</button>
    </div>
    <div className="md:w-1/2">
      <img src={heroImage} alt="Patient Management" className="w-full h-auto" />
    </div>
  </section>
    </div>
  );
};

export default Home;
