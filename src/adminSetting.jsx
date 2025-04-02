import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './adminSidebar'; 

const AdminSettings = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Settings submitted');
  };

  return (
    <div className="d-flex">
      <Sidebar />
      
      
      <main className="flex-grow-1 p-4" style={{ backgroundColor: '#f4f6f9', minHeight: '100vh' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold">System Settings</h2>
            <p className="text-muted">Update your website information and social media links.</p>
          </div>

          <form onSubmit={handleSubmit}>
           
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="card-title fw-bold mb-4">Website Information</h4>
                <div className="mb-3">
                  <label htmlFor="websiteName" className="form-label">Website Name</label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    id="websiteName" 
                    placeholder="Enter website name" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNo" className="form-label">Phone Number</label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    id="phoneNo" 
                    placeholder="Enter phone number" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control form-control-lg" 
                    id="email" 
                    placeholder="Enter email address" 
                    required 
                  />
                </div>
              </div>
            </div>

            
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="card-title fw-bold mb-4">Social Media Links</h4>
                <div className="mb-3">
                  <label htmlFor="facebookLink" className="form-label">Facebook URL</label>
                  <input 
                    type="url" 
                    className="form-control form-control-lg" 
                    id="facebookLink" 
                    placeholder="Enter Facebook URL" 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="instagramLink" className="form-label">Instagram URL</label>
                  <input 
                    type="url" 
                    className="form-control form-control-lg" 
                    id="instagramLink" 
                    placeholder="Enter Instagram URL" 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="googleLink" className="form-label">Google URL</label>
                  <input 
                    type="url" 
                    className="form-control form-control-lg" 
                    id="googleLink" 
                    placeholder="Enter Google URL" 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="linkedinLink" className="form-label">LinkedIn URL</label>
                  <input 
                    type="url" 
                    className="form-control form-control-lg" 
                    id="linkedinLink" 
                    placeholder="Enter LinkedIn URL" 
                  />
                </div>
              </div>
            </div>

            
            <div className="text-center mb-4">
              <button 
                type="submit" 
                className="btn btn-primary btn-lg px-4 py-2"
              >
                Save Settings
              </button>
            </div>
          </form>

          
          <footer className="text-center mt-5 pt-3 border-top">
           
          </footer> <p className="text-muted">© 2025 Your Website. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
};

export default AdminSettings;