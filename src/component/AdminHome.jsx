import React from "react";
import AdminSidebar from "./AdminSidebar"; // Assuming you have a sidebar component

const AdminHome = () => {
  return (
    <div className="d-flex">
      {/* Sidebar Component */}
      <AdminSidebar />
      
      {/* Main Content */}
      <div className="content p-4" style={{ marginLeft: "260px" }}>
        <h2>Welcome to Admin Home</h2>
        <p>Select an option from the sidebar to manage the content.</p>
      </div>
    </div>
  );
};

export default AdminHome;
