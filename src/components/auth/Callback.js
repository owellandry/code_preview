import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    axios
      .post('https://github.com/login/oauth/access_token', {
        code,
        client_id: '04fb02454ab303b6b803',
        client_secret: 'b43acb567d8e3b82704c8e3a10ad2d85017631e6',
      })
      .then((response) => {
        const token = response.data.access_token;

        // Aquí puedes guardar el token en el estado global de la aplicación o en una cookie, según tus necesidades.

        // Luego, redirige al usuario a la página de inicio o a la ruta deseada.
        navigate('/index');
      })
      .catch((error) => {
        console.error('Error al obtener el token de acceso:', error);
        // Aquí puedes manejar los errores de manera adecuada, como mostrando un mensaje de error al usuario.
      });
  }, [navigate]);

  return <div>Cargando...</div>;
};

export default Callback;
