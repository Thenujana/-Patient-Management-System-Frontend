import React, { useState } from "react";
import PatientService from "../services/patientService";
import type { Patient } from "../services/patientService";
import Navbar from "../components/Navbar";

const AddPatients: React.FC = () => {
  const [patient, setPatient] = useState<Patient>({
    fullName: "",
    email: "",
    telephone: "",
    gender: "",
    address: "",
    nic: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof Patient, string>>>({});
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPatient((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); 
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof Patient, string>> = {};

    if (!patient.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!patient.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patient.email))
      newErrors.email = "Enter a valid email address";

    if (!patient.telephone.trim()) newErrors.telephone = "Telephone number is required";
    else if (!/^\d{10}$/.test(patient.telephone))
      newErrors.telephone = "Telephone must be exactly 10 digits";

    if (!patient.gender) newErrors.gender = "Please select a gender";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!validate()) return;

    PatientService.addPatient(patient)
      .then(() => {
        setMessage("Patient added successfully!");
        setPatient({ fullName: "", email: "", telephone: "", gender: "", address: "", nic: "" });
        setErrors({});
      })
      .catch((err) => {
        console.error(err.response?.data || err.message);
        setMessage("Failed to add patient. Please check your input.");
      });
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="flex items-center justify-center p-6 mt-12">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">Add New Patient</h2>

          {message && (
            <p
              className={`mb-4 text-center font-medium ${
                message.includes("successfully") ? "text-green-600" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
          
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={patient.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full border px-4 py-2 rounded-lg focus:outline-none ${
                  errors.fullName ? "border-red-500 focus:ring-red-400" : "border-green-300 focus:ring-green-400"
                }`}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={patient.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className={`w-full border px-4 py-2 rounded-lg focus:outline-none ${
                  errors.email ? "border-red-500 focus:ring-red-400" : "border-green-300 focus:ring-green-400"
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

         
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Telephone</label>
              <input
                type="text"
                name="telephone"
                value={patient.telephone}
                onChange={handleChange}
                maxLength={10}
                placeholder="0711234567"
                className={`w-full border px-4 py-2 rounded-lg focus:outline-none ${
                  errors.telephone ? "border-red-500 focus:ring-red-400" : "border-green-300 focus:ring-green-400"
                }`}
              />
              {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
            </div>

         
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Gender</label>
              <select
                name="gender"
                value={patient.gender}
                onChange={handleChange}
                className={`w-full border px-4 py-2 rounded-lg focus:outline-none ${
                  errors.gender ? "border-red-500 focus:ring-red-400" : "border-green-300 focus:ring-green-400"
                }`}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={patient.address}
                onChange={handleChange}
                placeholder="123, Main Street"
                className="w-full border border-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

         
            <div>
              <label className="block mb-1 font-semibold text-gray-700">NIC / Passport</label>
              <input
                type="text"
                name="nic"
                value={patient.nic}
                onChange={handleChange}
                placeholder="123456789V"
                className="w-full border border-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Add Patient
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPatients;
