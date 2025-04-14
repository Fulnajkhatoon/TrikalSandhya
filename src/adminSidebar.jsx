import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" style={{width: '250px', height: '100vh'}}>
      <div>
        <h4 className="text-center mb-4">Admin Panel</h4>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/UserManagement">User</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/systemsetting">System Setting</Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="/add-ramayan-slok">Ramayan Slok</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addgeeta-shlok">Geeta Slok</Link>
          </li>
        </ul>
      </div>
      <div className="text-center pt-3 mt-auto border-top">
        <img 
          src="img/user1.jpg" 
          alt="Profile" 
          className="rounded-circle mb-2" 
          width="50" 
          height="50"
        />
        <div>Admin</div>
        <a href="#logout" className="text-danger text-decoration-none">Logout</a>
      </div>
    </div>
  );
};

export default Sidebar;