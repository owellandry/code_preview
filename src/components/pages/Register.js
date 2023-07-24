import React, { useState } from 'react';
import axios from 'axios';
import '../css/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí realizamos la solicitud HTTP para registrar al usuario en el backend
    axios
      .post('/api/register', formData) // Cambiar la ruta '/api/register' por la ruta real del backend
      .then((response) => {
        console.log(response.data); // Podemos mostrar un mensaje de éxito o redirigir al usuario a la página de inicio de sesión
      })
      .catch((error) => {
        console.error('Error al registrar usuario:', error);
      });
  };

  return (
    <div className="container">
      <div className="neumorphism-box">
        <h1>Registro de Usuario</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Nombre de Usuario:</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
