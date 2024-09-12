import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; // Import the Navbar

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false); // Set to false initially
  const [error, setError] = useState(null);
  const [showUsers, setShowUsers] = useState(false); // Track if users should be displayed

  const fetchUsers = async () => {
    setLoading(true); // Show loading state when fetching starts
    try {
      const response = await axios.get('http://localhost:3003/users');
      setUsers(response.data);
      setLoading(false);
      setShowUsers(true); // Set flag to show users when data is fetched
    } catch (err) {
      setError('Error fetching users');
      setLoading(false);
    }
  };

  return (
    <div>
       {/* Ensure Navbar is always at the top */}
      <div className="container">
        <h2>All Users</h2>
        {!showUsers ? (
          <button className="btn btn-primary" onClick={fetchUsers}>
            Show Users
          </button>
        ) : loading ? (
          <p>Loading users...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default UsersList;
