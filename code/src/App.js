import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Routes en lugar de Switch
import Login from './components/Login';
import Callback from './components/Callback';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes> {/* Usa Routes en lugar de Switch */}
        <Route path="/" element={<Login />} /> {/* Usa "element" en lugar de "component" */}
        <Route path="/callback" element={<Callback />} /> {/* Usa "element" en lugar de "component" */}
        <Route path="/inicio" element={<Home />} /> {/* Usa "element" en lugar de "component" */}
      </Routes>
    </Router>
  );
}

export default App;
