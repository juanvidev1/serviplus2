// EN - This is the entry point file for the project 
// EN - We must indicate to node js that it should use the express library with the command npm install express
// ES - Este es el archivo de punto de entrada de la aplicación web o del microservicio
// ES - Debemos indicarle a node js que vamos a utilizar la librería express. Antes de esto debemos instalar express con el comando npm install express


// EN - In this part of the file we must indicate to express that we require it here:
// ES - Se hacen las imortaciones de las librerías:
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('./conexion');

// EN - Now we indicate the port we should indicate to the app that express will be used to create it
// ES - Ahora le indicamos al programa que la app va a iniciarse con express y le ponemos un 

// Configuraciones
const app = express();
const env = process.env;
const port = env.port || 8080;
app.use(express.json())  // Esta librería hace que los objetos sean leídos como json. Si no se utiliza, los objetos no serán interpretados como json y el post no se hará bien
app.use(morgan('dev'));
app.use(cors());

/**Se utilizan dos parámetros el puerto y una función flecha con la 
 * que se va a crear código para poder generar un mensaje cuando el servicor inicia correctamente
 * */

//Arranque
app.listen(port, () =>{
    console.log("API iniciado en el puerto " + port);

});

/**EN - To start the app we should indicate to the paclage.json 
 * that the start it's a script. We include in the "scripts" object the atribute "start" and give the value "node index.js"
 * */
/** ES - Para arrancar la app debermos usar el comando npm start. Pero antes debemos ir al archivo package.json 
 * e indicar en el objeto "scripts" el atributo "start", con que lo va a ajecutar y el archivo que va a ejecutatr (ver el archivo package.json)
 * */

// Ahora vamos a poner algo diferente al mensaje cannot GET/
/**Esto se hace con el método get que tiene dos parámetros: un string con la ruta y una función 
 * que tiene dos parámetros y se debe pasar como función flecha que contiene los parámetros de request y response
 * */

//Rutas base
app.get("/", (request, response) => {
    // Para mostrar algo en la página podemos meter en el método send al que se le pueden enviar como parámetros un string 
    response.send("API iniciado");

});
app.use("/clientes", require("./rutas/ClienteRutas"));