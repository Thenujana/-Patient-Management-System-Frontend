import React, { useEffect, useState } from "react";
import type { Patient } from "../services/patientService";
import PatientService from "../services/patientService";

import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Patients: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedPatient, setEditedPatient] = useState<Patient | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => fetchPatients(), []);

  const fetchPatients = () => {
    setLoading(true);
    PatientService.getAllPatients()
      .then((res) => setPatients(res.data))
      .catch(() => Swal.fire("Error", "Failed to load patients", "error"))
      .finally(() => setLoading(false));
  };

  const startEdit = (patient: Patient) => {
    setEditingId(patient.id!);
    setEditedPatient({ ...patient });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditedPatient(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (!editedPatient) return;
    setEditedPatient({ ...editedPatient, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    if (!editedPatient || editingId === null) return;
    PatientService.updatePatient(editingId, editedPatient)
      .then(() => {
        Swal.fire("Success", "Patient updated", "success");
        cancelEdit();
        fetchPatients();
      })
      .catch(() => Swal.fire("Error", "Update failed", "error"));
  };

  const deletePatient = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will delete the patient permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        PatientService.deletePatient(id)
          .then(() => {
            Swal.fire("Deleted!", "Patient deleted.", "success");
            fetchPatients();
          })
          .catch(() => Swal.fire("Error", "Delete failed", "error"));
      }
    });
  };

 
  const highlightMatch = (text: string) => {
    if (!searchQuery.trim()) return text;

    const regex = new RegExp(`(${searchQuery})`, "gi");
    return text.replace(
      regex,
      (match) => `<span class="bg-yellow-300 font-semibold rounded px-1">${match}</span>`
    );
  };

//filtering by query
  const filteredPatients = patients.filter((p) =>
    p.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const renderCell = (field: keyof Patient, patient: Patient) => {
    const isEditing = editingId === patient.id;

    if (isEditing) {
      return field === "gender" ? (
        <select
          name="gender"
          value={editedPatient?.gender || ""}
          onChange={handleChange}
          className="border px-2 py-1 rounded w-full"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      ) : (
        <input
          type="text"
          name={field}
          value={editedPatient?.[field] || ""}
          onChange={handleChange}
          className="border px-2 py-1 rounded w-full"
        />
      );
    }

    const value = patient[field];

    if (typeof value === "string") {
      return (
        <span
          dangerouslySetInnerHTML={{
            __html: highlightMatch(value),
          }}
        />
      );
    }

    return value;
  };

  if (loading) return <p className="text-center text-green-600 mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-green-50 p-6 mt-8">
      <Navbar />

     
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Patients List
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-green-600 text-white">
              <tr>
                {/* <th className="px-4 py-2">ID</th> */}
                <th className="px-4 py-2">Full Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Telephone</th>
                <th className="px-4 py-2">Gender</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">NIC</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredPatients.length > 0 ? (
                filteredPatients.map((p) => {
                  const isEditing = editingId === p.id;

                  return (
                    <tr key={p.id} className="border-b hover:bg-green-50 transition">
                      {/* <td className="px-4 py-2">{p.id}</td> */}
                      <td className="px-4 py-2">{renderCell("fullName", p)}</td>
                      <td className="px-4 py-2">{renderCell("email", p)}</td>
                      <td className="px-4 py-2">{renderCell("telephone", p)}</td>
                      <td className="px-4 py-2">{renderCell("gender", p)}</td>
                      <td className="px-4 py-2">{renderCell("address", p)}</td>
                      <td className="px-4 py-2">{renderCell("nic", p)}</td>

                      <td className="px-4 py-2 flex gap-2">
                        {isEditing ? (
                          <>
                            <button
                              onClick={saveEdit}
                              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                            >
                              Save
                            </button>
                            <button
                              onClick={cancelEdit}
                              className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 transition"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => startEdit(p)}
                              className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deletePatient(p.id!)}
                              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={8} className="text-center p-4 text-gray-500">
                    No patients found for this search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patients;
