import React, { useState } from 'react';
import './css/index.css'; // Importamos el archivo CSS para estilizar el componente
import Login from './pages/Login';
import Register from './pages/Register';

const Index = () => {
  // Estados para controlar si se muestra el formulario de registro y el de inicio de sesión
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  // Aquí puedes agregar la lógica para la conexión con el backend y la desencriptación de los datos
  // ...

  const handleRegister = () => {
    // Mostrar el formulario de registro al hacer clic en el botón "Registrarse"
    setShowRegisterForm(true);
    // Ocultar el formulario de inicio de sesión si estaba visible
    setShowLoginForm(false);
  };

  const handleLogin = () => {
    // Mostrar el formulario de inicio de sesión al hacer clic en el botón "Iniciar Sesión"
    setShowLoginForm(true);
    // Ocultar el formulario de registro si estaba visible
    setShowRegisterForm(false);
  };

  return (
    <div className="index-container">
      <img src="https://media.discordapp.net/attachments/1055292395505332336/1132915757236367430/icons8-seguridad-48.png" alt="Logo" className="logo-image" />
      <h1 className="index-title">Code Editor - CampusLands</h1>
      <div className="index-content">
        <LoginButton handleLogin={handleLogin} />
        <RegisterButton handleRegister={handleRegister} />
      </div>

      {/* Mostrar el formulario de registro si showRegisterForm es true */}
      {showRegisterForm && <Register />}

      {/* Mostrar el formulario de inicio de sesión si showLoginForm es true */}
      {showLoginForm && <Login />}
    </div>
  );
};

const LoginButton = ({ handleLogin }) => {
  return (
    <button className="index-button" onClick={handleLogin}>
      Iniciar Sesión
    </button>
  );
};

const RegisterButton = ({ handleRegister }) => {
  return (
    <button className="index-button" onClick={handleRegister}>
      Registrarse
    </button>
  );
};

export default Index;
