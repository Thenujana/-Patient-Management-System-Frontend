import heroImage from "../assets/healthcare.jpg";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen relative">
     
      <img
        src={heroImage}
        alt="Hero"
        className="absolute  w-full h-580px object-cover brightness-75"
      />
      <Navbar />

    
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          Patient Management System
        </h1>
        <p className="mt-4 text-white text-lg drop-shadow-md">
          Easy to maintain patient records.
        </p>
       
      </div>

      
      <div className="relative z-10">
        <About />
      </div>
       <Footer/>
    </div>
   
  );
};

export default Home;
