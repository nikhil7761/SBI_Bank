import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errorDetails, setErrorDetails] = useState(''); // For detailed error information
  const [loading, setLoading] = useState(false); // Loading state to show a spinner or disable the form while waiting for response

  const validateForm = () => {
    if (!username || !password) {
      setMessage('Both username and password are required.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true); // Set loading state
    setMessage(''); // Clear previous messages
    setErrorDetails(''); // Clear previous error details

    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:3003/login', {
        username,
        password,
      });

      // Check response from the server
      if (response.data.success) {
        setMessage('Login successful! Redirecting...');
        setErrorDetails('');
        // You can redirect or save the authentication token here
      } else {
        setMessage(response.data.message || 'Invalid credentials.');
        setErrorDetails('');
      }
    } catch (error) {
      // Provide detailed error information
      setMessage('Error during login request.');
      setErrorDetails(
        error.response ? JSON.stringify(error.response.data) : error.message
      );
      console.error('Login error:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="container" style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            required
            disabled={loading} // Disable input while submitting
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
            disabled={loading} // Disable input while submitting
          />
        </label>
        <input
          type="submit"
          value={loading ? 'Logging in...' : 'Login'}
          disabled={loading} // Disable button during login
          style={{ marginTop: '10px', padding: '10px', cursor: loading ? 'not-allowed' : 'pointer' }}
        />
      </form>
      
      {/* Display message for login status */}
      {message && <p style={{ marginTop: '10px', color: message === 'Login successful! Redirecting...' ? 'green' : 'red' }}>{message}</p>}
      
      {/* Display detailed error information */}
      {errorDetails && <pre style={{ color: 'red', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{errorDetails}</pre>}
    </div>
  );
}

export default Login;
