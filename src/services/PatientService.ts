// src/services/PatientService.ts
import axios from "axios";

export interface Patient {
  id?: number;
  fullName: string;
  email: string;
  telephone: string;
  gender?: string;
  address?: string;
  nic?: string;
}

const API_URL = "http://localhost:8080/api/patients"; 

class PatientService {
  
  addPatient(patient: Patient) {
    return axios.post(`${API_URL}/add`, patient);
  }

  
  getAllPatients() {
    return axios.get<Patient[]>(`${API_URL}/get-all`);
  }

  
  getPatientById(id: number) {
    return axios.get<Patient>(`${API_URL}/get/${id}`);
  }

  
  searchByFullName(name: string) {
    return axios.get<Patient[]>(`${API_URL}/search-name/${name}`);
  }

  searchByEmail(email: string) {
    return axios.get<Patient>(`${API_URL}/search-email/${email}`);
  }

  updatePatient(id: number, patient: Patient) {
    return axios.put(`${API_URL}/update/${id}`, patient);
  }

  deletePatient(id: number) {
    return axios.delete(`${API_URL}/delete/${id}`);
  }
}

export default new PatientService();
