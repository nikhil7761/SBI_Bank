import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Html5QrcodeScanner } from 'html5-qrcode'; // Import Html5Qrcode

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errorDetails, setErrorDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [showScanner, setShowScanner] = useState(false); // Show or hide QR scanner

  // Validate form before submission
  const validateForm = () => {
    if (!username || !password) {
      setMessage('Both username and password are required.');
      return false;
    }
    return true;
  };

  // Handle form submission for login
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage('');
    setErrorDetails('');

    try {
      const response = await axios.post('http://localhost:3003/login', { username, password });
      if (response.data.success) {
        setMessage('Login successful! Redirecting...');
      } else {
        setMessage('Invalid credentials.');
      }
    } catch (error) {
      setMessage('Error during login request.');
      setErrorDetails(error.response ? JSON.stringify(error.response.data) : error.message);
    } finally {
      setLoading(false);
    }
  };

  // Initialize QR code scanner inside useEffect to ensure DOM is ready
  useEffect(() => {
    if (showScanner) {
      const scanner = new Html5QrcodeScanner('qr-reader', {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      });

      scanner.render(
        (decodedText) => {
          try {
            const qrData = JSON.parse(decodedText);
            setUsername(qrData.username);
            setPassword(qrData.password);
            setMessage('QR Code scanned successfully!');
            setShowScanner(false);
            scanner.clear();
          } catch (error) {
            setMessage('Invalid QR code format.');
          }
        },
        (error) => {
          console.log('QR Code scan failed', error);
          setMessage('Failed to scan QR Code. Try again.');
        }
      );

      return () => {
        scanner.clear();
      };
    }
  }, [showScanner]);

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
            disabled={loading}
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
            disabled={loading}
          />
        </label>
        <input
          type="submit"
          value={loading ? 'Logging in...' : 'Login'}
          disabled={loading}
          style={{ marginTop: '10px', padding: '10px', cursor: loading ? 'not-allowed' : 'pointer' }}
        />
      </form>

      <button onClick={() => setShowScanner(true)} disabled={showScanner} style={{ marginTop: '10px' }}>
        {showScanner ? 'Scanning...' : 'Scan QR Code'}
      </button>
      {showScanner && <div id="qr-reader" style={{ marginTop: '10px' }}></div>}

      {message && <p style={{ marginTop: '10px', color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>}
      {errorDetails && <pre style={{ color: 'red', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{errorDetails}</pre>}
    </div>
  );
}

export default Login;
