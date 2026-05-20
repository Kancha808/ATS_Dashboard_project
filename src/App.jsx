import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Candidates from "./pages/candidates";
import CandidateDetails from "./pages/CandidateDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/candidate-details" element={<CandidateDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;