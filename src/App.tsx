import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import AddPatient from "./pages/AddPatient"; 
import Patients from "./pages/Patients";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
         <Route path="/add-patient" element={<AddPatient />} /> 
            <Route path="/patients" element={<Patients />} /> 

      </Routes>
    </Router>
  );
}

export default App;
