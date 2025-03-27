import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faHome, faEnvelope, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faYoutube, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
    <style>
        {`
    .footer {
  padding: 40px 0;
}

.footer a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.footer a:hover {
  color: #007bff;
}

.footer .social-icons a {
  font-size: 20px;
  margin: 0 10px;
  transition: transform 0.3s;
}

.footer .social-icons a:hover {
  transform: scale(1.2);
  color: #007bff;
}

.footer ul {
  padding: 0;
  list-style: none;
}

.footer ul li {
  margin-bottom: 5px;
}
  `}


    </style>
    <footer className="footer text-center text-lg-start bg-dark text-light">
      {/* Social Media Section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="#" className="me-4 text-reset"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" className="me-4 text-reset"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="me-4 text-reset"><FontAwesomeIcon icon={faGoogle} /></a>
          <a href="#" className="me-4 text-reset"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="me-4 text-reset"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#" className="me-4 text-reset"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </section>

      {/* Links and About Section */}
      <section className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          {/* About Us */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <FontAwesomeIcon icon={faGem} className="me-3" /> About Us
            </h6>
            <p>Discover the spiritual wisdom of Ramayan and Geeta. Our platform brings together the teachings of these ancient epics.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
            <p><Link to="/home" className="text-reset">Home</Link></p>
            <p><Link to="/geeta" className="text-reset">Geeta</Link></p>
            <p><Link to="/ramayan" className="text-reset">Ramayan</Link></p>
            <p><Link to="/about" className="text-reset">About Us</Link></p>
            <p><Link to="/contact" className="text-reset">Contact</Link></p>
          </div>

          {/* Contact Section */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><FontAwesomeIcon icon={faHome} className="me-3" /> New York, NY 10012, US</p>
            <p><FontAwesomeIcon icon={faEnvelope} className="me-3" /> info@example.com</p>
            <p><FontAwesomeIcon icon={faPhone} className="me-3" /> + 01 234 567 88</p>
            <p><FontAwesomeIcon icon={faPrint} className="me-3" /> + 01 234 567 89</p>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-center">
            <h6 className="text-uppercase fw-bold mb-4">Follow Us</h6>
            <div className="social-icons">
              <a href="#" className="me-4 text-reset"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="me-4 text-reset"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="me-4 text-reset"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="me-4 text-reset"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2025 MyWebsite. All Rights Reserved.
      </div>
    </footer>
    </>
  );
};

export default Footer;
