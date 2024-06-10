import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import NavigationBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'inclure ce fichier CSS
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <div className="container mt-4">
          <Routes>
            <Route exact path="/" element={<UserList />} />
            <Route path="/users/:id" element={<UserDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
