import React from 'react';

const Login = () => {
  const handleLogin = () => {
    // Redirige al usuario a la página de autorización de GitHub
    window.location.href = `https://github.com/login/oauth/authorize?client_id=04fb02454ab303b6b803&scope=user`;
  };

  return (
    <div>
      <h1>Inicio de Sesión con GitHub</h1>
      <button onClick={handleLogin}>Iniciar Sesión con GitHub</button>
    </div>
  );
};

export default Login;
