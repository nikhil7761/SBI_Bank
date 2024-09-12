import React, { useState } from 'react';
import axios from 'axios'; // Import Axios to make HTTP requests

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errorDetails, setErrorDetails] = useState(''); // For detailed error information

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send sign-up request to the backend
      const response = await axios.post('http://localhost:3003/signup', {
        username,
        password,
      });

      // Check response from the server
      if (response.data.success) {
        setMessage('Sign-up successful!');
        setErrorDetails(''); // Clear error details on success
      } else {
        setMessage(response.data.message || 'Sign-up failed');
        setErrorDetails(''); // Clear error details on sign-up failure
      }
    } catch (error) {
      // Provide more detailed error information
      setMessage('Error during sign-up request');
      // Convert error response to string for display
      setErrorDetails(
        error.response ? JSON.stringify(error.response.data) : error.message
      );
      console.error('Sign-up error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
      {/* Display message for sign-up status */}
      {message && <p>{message}</p>}
      {/* Display detailed error information */}
      {errorDetails && <pre>{errorDetails}</pre>}
    </div>
  );
}

export default SignUp;
