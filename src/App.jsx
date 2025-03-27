import "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Login from "./component/Login";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import Footer from "./component/Footer";
import About from "./component/About";
import Register from "./component/Register";
import Ramayan from "./component/Ramayan";
import Geeta from "./component/Geeta";
import Contact from "./component/Contact";
import RamSeetaMilan from "./component/RamSeetaMilan";  // ✅ Fixed Import
import RamayanSholok from "./component/RamayanSholok"
import GeetaShlok from "./component/GeetaShlok"

// import Vanvas from "./component/Vanvas";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/ramayan" element={<Ramayan />} />
        <Route path="/geeta" element={<Geeta />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ramayansholok" element={<RamayanSholok/>} />
        <Route path="/GeetaShlok" element={<GeetaShlok/>}/>
  

        {/* New Routes for Chapters */}
        <Route path="/ram-seeta-milan" element={<RamSeetaMilan/>} />  {/* ✅ Fixed Path */}
        {/* <Route path="/vanvas" element={<Vanvas />} /> */}
=======
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

        <Route path="/" element={<Home />} />
>>>>>>> 89865609c92ed0322aa9b44e112295dc4a8cf0ea
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
