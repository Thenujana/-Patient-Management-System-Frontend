import heroImage from "../assets/healthcare.jpg";
import Navbar from "../components/Navbar";

const Home2 = () => {
  return (
    <div className="min-h-screen relative">
      <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover brightness-75" />
      <Navbar />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg"> Patient Management System</h1>
        <p className="mt-4 text-white text-lg drop-shadow-md">Easy to maintain patient records.</p>
        <button className="mt-6 px-8 py-3 bg-green-600 rounded-full text-white font-semibold hover:bg-green-700 transition">Get Started</button>
      </div>
    </div>
  );
};

export default Home2;
