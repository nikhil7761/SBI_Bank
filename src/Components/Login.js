import React from 'react';

function Login() {
  return (
    <div className="container">
      <form>
        <h2>Login</h2>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
