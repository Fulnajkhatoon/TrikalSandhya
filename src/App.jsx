import "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar"; 
import AboutUs from "./About";
import ContactUs from "./Contact";
import Home from './Home'
import Ramayan from "./Ramayan";
import Geeta from "./Geeta";
import RamayanChapters from "./RamSeetaMilan"
import Shloka from "./Shloka"
import GeetaShlokas from "./Geeta_shloka";
import UpdateProfile from "./UpdateProfile";
import UserManagement from './UserManagement'
import AdminSettings from './adminSetting'
import Sidebar from "./AdminSidebar";
import AddRamayanSlok from './AddRamayanShloka'
function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/ramayan" element={<Ramayan />} />
        <Route path="/geeta" element={<Geeta />} />
        <Route path="/ram-seeta-milan" element={<RamayanChapters />} />
        <Route path="/shloka/:chapter" element={<Shloka />} />
        <Route path="/geeta-shlok/:adhyay" element={<GeetaShlokas />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/systemsetting" element={<AdminSettings />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/add-ramayan-slok" element={<AddRamayanSlok />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
