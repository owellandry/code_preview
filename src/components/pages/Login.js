import React, { useState } from 'react';
import '../css/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);

  const handleLogin = () => {
    // Verificar que el usuario y la contraseña no estén vacíos
    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor ingresa tu usuario y contraseña.');
      return;
    }

    // Verificar si se debe pedir el código único
    if (showCodeInput) {
      // Verificar que el código no esté vacío
      if (code.trim() === '') {
        alert('Por favor ingresa el código único.');
        return;
      }
      // Aquí puedes implementar la lógica para verificar el código único con el backend
      // Si el código es válido, puedes continuar con el inicio de sesión exitoso
      // Si el código es inválido, muestra un mensaje de error
      alert('Inicio de sesión exitoso con validación de dos factores.');
    } else {
      // Mostrar el campo para ingresar el código único
      setShowCodeInput(true);
      // Limpiar el campo de código en caso de que se haya ingresado algo previamente
      setCode('');
    }
  };

  return (
    <div className="container">
      <div className="neumorphism-box">
        <div className="logo-container">
          <img src="https://media.discordapp.net/attachments/1055292395505332336/1132850580855996416/github.png" alt="GitHub Logo" />
        </div>
        <h1>Inicio de Sesión</h1>
        <div className="input-container">
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {/* Mostrar el campo de código único si showCodeInput es true */}
        {showCodeInput && (
          <div className="input-container">
            <label htmlFor="code">Código único:</label>
            <input type="text" id="code" value={code} onChange={(e) => setCode(e.target.value)} />
          </div>
        )}
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </div>
    </div>
  );
};

export default Login;
