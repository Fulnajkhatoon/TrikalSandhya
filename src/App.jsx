import "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import About from "./component/About";
import Contact from "./component/Contact";
import Ramayan from "./component/Ramayan";
import Geeta from "./component/Geeta";
import RamSeetaMilan from "./component/RamSeetaMilan";
import RamayanSholok from "./component/RamayanSholok";
import GeetaShlok from "./component/GeetaShlok";
import Footer from "./component/footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ramayan" element={<Ramayan />} />
        <Route path="/geeta" element={<Geeta />} />
        <Route path="/ramayansholok" element={<RamayanSholok />} />
        <Route path="/geeta-shlok" element={<GeetaShlok />} />
        <Route path="/ram-seeta-milan" element={<RamSeetaMilan />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
