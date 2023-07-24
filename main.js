const fs = require('fs');
const crypto = require('crypto-js');

// Clave de cifrado (guárdala de forma segura en un entorno seguro)
const encryptionKey = 'miClaveSecreta123'; // Reemplaza por tu clave segura

// Función para cifrar un valor
function encryptValue(value) {
  return crypto.AES.encrypt(value, encryptionKey).toString();
}

// Variables a proteger
const variables = {
    dbHost: 'localhost',
    dbUser: 'root',
    dbPassword: '',
    dbDatabase: 'test'

};

// Cifrar los valores de las variables y escribirlos en el archivo .env
let content = '';
for (const variable in variables) {
  if (variables.hasOwnProperty(variable)) {
    const value = variables[variable];
    const encryptedValue = encryptValue(value);
    content += `${variable} = ${encryptedValue}\n`;
  }
}

fs.writeFileSync('.env', content, 'utf8');

console.log('Archivo .env creado y variables cifradas.');