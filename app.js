const express = require('express'); // Se importa el paquete express
const cors = require('cors');
require('dotenv').config(); // Lee el archivo de enviroments ".env"

// Crear el servidor de express
const app = express();

// Cors 
app.use( cors() );
// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use( '/api/software', require('./routes/students') ); // Estudiantes


// Metodo listen para correr el servidor
app.listen( process.env.PORT, () => {
    console.log(`aplicacion corriendo en el puerto... ${process.env.PORT}`);
});
