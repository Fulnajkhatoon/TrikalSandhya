import "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar"; 
import AboutUs from "./About";
import ContactUs from "./Contact";
import UserManagement from './UserManagement';
import Home from './Home'

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
