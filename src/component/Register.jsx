import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const navigate = useNavigate(); // Hook for navigation

  // State to handle form inputs
  const [formData, setFormData] = useState({
    newUsername: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  // State to handle registration success message & errors
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD:src/Register.jsx

    // Validate passwords match
=======
    setError(""); // Clear previous errors

    // Validation: Check if passwords match
>>>>>>> c4c52e7b1da817077189b41733486416e054a9fc:src/component/Register.jsx
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

<<<<<<< HEAD:src/Register.jsx
    try {
      const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newUsername: formData.newUsername,
          email: formData.email,
          newPassword: formData.newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          newUsername: "",
          email: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
=======
    // Simulate registration success
    setSuccess(true);

    // Redirect to login page after 2 seconds
    setTimeout(() => {
      navigate("/login");
    }, 2000);
>>>>>>> c4c52e7b1da817077189b41733486416e054a9fc:src/component/Register.jsx
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
                  Registration Successful! Redirecting to <Link to="/login">Login</Link>...
                </div>
              )}
              {error && <div className="alert alert-danger text-center">{error}</div>}

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
                <button type="submit" className="btn btn-primary w-100" disabled={success}>
                  {success ? "Registering..." : "Register"}
                </button>
              </form>
            </div>
            <div className="card-footer text-center">
              <p>
<<<<<<< HEAD:src/Register.jsx
                Already have an account? <a href="/login">Login</a>
=======
                Already have an account? <Link to="/login">Login</Link>
>>>>>>> c4c52e7b1da817077189b41733486416e054a9fc:src/component/Register.jsx
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
