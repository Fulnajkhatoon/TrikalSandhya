import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./AdminSidebar"; // Ensure Sidebar component is imported

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "admin", email: "admin@gmail.com", role: "Admin" },
    { id: 2, name: "abd", email: "abd@gmail.com", role: "User" },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    console.log(`Deleted user with ID: ${id}`);
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div
        className="d-flex justify-content-start"
        style={{ flexGrow: 1, padding: "20px" }}>
        <div className="bg-light p-4 rounded shadow" style={{ maxWidth: "800px", width: "100%" }}>
          <h2 className="text-center">User Management</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="fadeInRow">
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(user.id)}>
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
