import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import AddPatient from "./pages/AddPatient"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
         <Route path="/add-patient" element={<AddPatient />} /> 

      </Routes>
    </Router>
  );
}

export default App;
