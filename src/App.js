import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Callback from './Callback';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/inicio" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
