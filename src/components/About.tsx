import React from "react";
import aboutImage from "../assets/patient-hero.png"; 

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">About The System</h2>
          <p className="mt-4 text-gray-600 text-lg">
             Patient Management System is designed to help healthcare professionals efficiently manage patient records and this is supportive for the CRUD operations.
          </p>
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         
          <div className="flex justify-center md:justify-end">
            <img
              src={aboutImage}
              alt="About PMS"
              className=" w-full max-w-md"
            />
          </div>

         
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-green-800">
              Why Choose Our System?
            </h3>
            <p className="text-gray-700">
              - Keep all patient records organized and secure.<br/>
              -Easy Search and filtering.<br/>
               -REal time updating.<br/>
              

              
            </p>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
