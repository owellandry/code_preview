const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql');

// Lee las variables del archivo .env
dotenv.config();

// Crea una instancia de Express
const app = express();

// Middleware para permitir que Express comprenda el formato JSON
app.use(express.json());

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos establecida correctamente');
});

// Ruta para registrar un usuario
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  // Aquí debes implementar la lógica para insertar los datos en la base de datos
  // Por ejemplo:
  const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
  connection.query(sql, [username, email, password], (err, result) => {
    if (err) {
      console.error('Error al registrar usuario:', err);
      res.status(500).json({ error: 'Error al registrar usuario' });
      return;
    }
    res.json({ message: 'Usuario registrado exitosamente' });
  });
});

// Inicia el servidor en el puerto 3000 (o el puerto que desees)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
