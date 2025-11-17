import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPatient = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    nic: "",
    gender: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { fullName: "", phone: "", email: "" };

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      valid = false;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      valid = false;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Patient Added:", form);
      alert("Patient added successfully!");
      navigate("/patients");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-lg border-l-8 border-green-500">
        
        
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Add New Patient
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Fill the details below to register a new patient.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

       
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ${errors.fullName ? "focus:ring-red-400 border-red-500" : "focus:ring-green-500 border-gray-300"}`}
              placeholder="Full name"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

         
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ${errors.phone ? "focus:ring-red-400 border-red-500" : "focus:ring-green-500 border-gray-300"}`}
              placeholder="Phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

        
          <div>
            <label className="block text-gray-700 font-medium mb-1">NIC</label>
            <input
              type="text"
              name="nic"
              value={form.nic}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 border-gray-300"
              placeholder="Enter the NIC number"
            />
          </div>

        
          <div>
            <label className="block text-gray-700 font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 border-gray-300"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

       
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ${errors.email ? "focus:ring-red-400 border-red-500" : "focus:ring-green-500 border-gray-300"}`}
              placeholder="example@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

         
          <div>
            <label className="block text-gray-700 font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 border-gray-300"
              placeholder="Address "
            ></textarea>
          </div>

          
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition text-lg shadow-md"
            >
              Add Patient
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddPatient;
