import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Components/Signup';
import UsersList from './Components/UserList';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Account from './Components/Account';
import Transfer from './Components/Transfer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/signup"  element={<SignUp />} />
        <Route path="/userslist" element={<UsersList />} /> {/* Updated route */}
      </Routes>
    </div>
  );
}

export default App;
