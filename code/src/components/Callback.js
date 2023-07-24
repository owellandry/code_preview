import React, { useEffect } from 'react';
import axios from 'axios';

const Callback = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    // Intercambia el código de autorización por un token de acceso desde el servidor
    axios
      .post('URL_DEL_SERVIDOR_PARA_OBTENER_EL_TOKEN', {
        code,
        client_id: '04fb02454ab303b6b803',
        client_secret: 'b43acb567d8e3b82704c8e3a10ad2d85017631e6',
      })
      .then((response) => {
        const token = response.data.access_token;

        // Aquí puedes guardar el token en el estado global de la aplicación o en una cookie, según tus necesidades.

        // Luego, redirige al usuario a la página de inicio o a la ruta deseada.
        window.location.href = '/inicio'; // Cambia '/inicio' por la ruta a la que deseas redirigir al usuario después del inicio de sesión.
      })
      .catch((error) => {
        console.error('Error al obtener el token de acceso:', error);
        // Aquí puedes manejar los errores de manera adecuada, como mostrando un mensaje de error al usuario.
      });
  }, []);

  return <div>Cargando...</div>;
};

export default Callback;
