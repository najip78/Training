// App.js
import './App.css';
import Dashboard from './Pages/Elements';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/Singin';
import Home from './Pages/Home';
import AntiD from './Pages/AntiD';
import EmployeeRegistration from './Pages/Em';
import EmployeeList from './Pages/EmpList';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/antiDesign" element={<AntiD />} />
        <Route path="/emp" element={< EmployeeRegistration/>} />
        <Route path="/emp/list" element={< EmployeeList/>} />

      </Routes>
    </Router>
  );
}

export default App;
