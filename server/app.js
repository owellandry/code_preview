// src/app.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Hacer una solicitud al servidor para obtener la información de la base de datos
    axios.get('http://localhost:5000/informacion').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Información de la base de datos:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
