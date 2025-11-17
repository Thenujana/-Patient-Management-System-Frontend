import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Make sure this path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Load Home on '/' */}
      </Routes>
    </Router>
  );
}

export default App;
