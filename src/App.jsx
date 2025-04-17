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
import RamSeetaMilan from "./RamSeetaMilan";
import Vanvas from "./VanvasChapters";
import AdminLogin from './AdminLogin';
import AddGeetaShloka from'./AddGeetaShloka';
import GeetaShlokaDetails from './GeetaShlokaDetails';
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
        <Route path="/geeta-shloka-details/:adhyay/:verse" element={< GeetaShlokaDetails/>} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/systemsetting" element={<AdminSettings />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/add-ramayan-slok" element={<AddRamayanSlok />} />
        <Route path="/addgeeta-shlok" element={<AddGeetaShloka />} />
        <Route path="/" element={<Ramayan />} />
        <Route path="/ram-seeta-milan" element={<RamSeetaMilan />} />
        <Route path="/vanvas" element={<Vanvas />} />
        <Route path="/shloka/:category/:adhyay_number" element={<Shloka />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
