<<<<<<< HEAD:src/component/Register.jsx

import { Link } from "react-router-dom";
=======
import { useState } from "react";
>>>>>>> 89865609c92ed0322aa9b44e112295dc4a8cf0ea:src/Register.jsx
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    newUsername: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  // State to handle registration success message
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Example validation (ensure passwords match)
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // Simulate registration success
    setSuccess(true);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Register</h3>
            </div>
            <div className="card-body">
              {success && (
                <div className="alert alert-success text-center">
                  Registration Successful! Please <a href="/login">Login</a>.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="newUsername"
                    value={formData.newUsername}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
              </form>
            </div>
            <div className="card-footer text-center">
              <p>
                Already have an account? <a href="login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
