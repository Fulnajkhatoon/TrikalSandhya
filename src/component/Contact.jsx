import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const ContactUs = () => {
  return (
    <>
      {/* Contact Hero Section */}
      <div className="contact-section" style={{
        background: "url('img/contact-bg.jpg') center/cover no-repeat",
        padding: "100px 20px",
        color: "white",
        textAlign: "center",
        position: "relative"
      }}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have any questions? Reach out to us, and we'll get back to you as soon as possible!</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="contact-form" style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginTop: "-50px",
              position: "relative"
            }}>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-custom w-100" style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                transition: "0.3s"
              }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
