import { useState, useEffect } from "react";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setFormData({
        email: user.email,
        username: user.username,
      });
    } else {
      setError("User not logged in!");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setError("User not logged in!");
      return;
    }

    try {
      console.log("Sending update request with:", {
        email: user.email,
        username: formData.username,
      });

      const response = await fetch("http://localhost:5000/userupdate", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          username: formData.username,
        }),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        setSuccess(true);
        setError("");

        // Update localStorage username
        const updatedUser = { ...user, username: formData.username };
        localStorage.setItem("user", JSON.stringify(updatedUser));

        alert("Profile updated successfully!");
      } else {
        setError(data.message || "Error updating profile!");
        setSuccess(false);
      }
    } catch (error) {
      console.error("Update error:", error);
      setError("An error occurred. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Update Profile</h3>
            </div>
            <div className="card-body">
              {error && <div className="alert alert-danger text-center">{error}</div>}
              {success && (
                <div className="alert alert-success text-center">
                  Profile updated successfully!
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Update Profile
                </button>
              </form>
            </div>
            <div className="card-footer text-center">
              <p>
                Don't want to update? <a href="/">Go Back</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
