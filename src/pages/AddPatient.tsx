import React, { useState } from "react";
import type { Patient } from "../services/PatientService";
import PatientService from "../services/PatientService";
import { User, Mail, Phone, Home, IdCard } from "lucide-react"; 
import Navbar from "../components/Navbar";

const AddPatients: React.FC = () => {
  const [patient, setPatient] = useState<Patient>({
    fullName: "", email: "", telephone: "", gender: "", address: "", nic: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Patient, string>>>({});
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPatient(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof Patient, string>> = {};
    if (!patient.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!patient.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patient.email)) newErrors.email = "Enter a valid email";
    if (!patient.telephone.trim()) newErrors.telephone = "Telephone number is required";
    else if (!/^\d{10}$/.test(patient.telephone)) newErrors.telephone = "Telephone must be 10 digits";
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
        setMessage("Failed to add patient.");
      });
  };

  return (
    <div className="min-h-screen bg-green-100">
      <Navbar />
      <div className="flex justify-center items-center mt-12 p-6">
        <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-lg">
          <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Add New Patient</h2>
          {message && <p className={`text-center ${message.includes("successfully") ? "text-green-600" : "text-red-500"} mb-4`}>{message}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            
            <div className="flex items-center border rounded-lg p-2">
              <User className="text-gray-400 mr-2" />
              <input
                type="text"
                name="fullName"
                value={patient.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full outline-none px-2 py-2"
              />
            </div>
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

            <div className="flex items-center border rounded-lg p-2">
              <Mail className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                value={patient.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full outline-none px-2 py-2"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <div className="flex items-center border rounded-lg p-2">
              <Phone className="text-gray-400 mr-2" />
              <input
                type="text"
                name="telephone"
                value={patient.telephone}
                onChange={handleChange}
                placeholder="Telephone"
                className="w-full outline-none px-2 py-2"
              />
            </div>
            {errors.telephone && <p className="text-red-500 text-sm">{errors.telephone}</p>}

            <select
              name="gender"
              value={patient.gender}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 outline-none"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}

            <div className="flex items-center border rounded-lg p-2">
              <Home className="text-gray-400 mr-2" />
              <input
                type="text"
                name="address"
                value={patient.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full outline-none px-2 py-2"
              />
            </div>

            <div className="flex items-center border rounded-lg p-2">
              <IdCard className="text-gray-400 mr-2" />
              <input
                type="text"
                name="nic"
                value={patient.nic}
                onChange={handleChange}
                placeholder="NIC / Passport"
                className="w-full outline-none px-2 py-2"
              />
            </div>

            <button type="submit" className="w-full py-3 bg-green-600 hover:bg-green-800 text-white font-bold rounded-lg transition">
              Add Patient
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPatients;
