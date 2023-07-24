import React from 'react';
import './css/Login.css';

const Login = () => {
  const handleLogin = () => {
    // Redirige al usuario a la página de autorización de GitHub
    window.location.href = `https://owellandry.github.io/code_preview/auth/callback`;
  };

  return (
    <div className="container">
      <div className="neumorphism-box">
        <div className="logo-container">
          <img src="https://media.discordapp.net/attachments/1055292395505332336/1132850580855996416/github.png" alt="GitHub Logo" />
        </div>
        <h1>Inicio de Sesión con GitHub</h1>
        <p>Bienvenido a nuestro pequeño editor de código online. Inicia sesión con tu cuenta de GitHub para comenzar.</p>
        <button onClick={handleLogin}>Iniciar Sesión con GitHub</button>
      </div>
    </div>
  );
};

export default Login;
