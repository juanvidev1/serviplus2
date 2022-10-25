// Importaciones
const mongoose = require('mongoose');


// Se crea el esquema de datos específico para utilizarla como una base de la estructura
const clientSchema = mongoose.Schema({
    nombres: {type: String, maxLength: 60, required: true, unique: false},
    apellidos: {type: String, maxLength: 60, required: true, unique: false},
    username: {type: String, maxLength: 60, required: true, unique: false},
    password: {type:String, maxLength: 30, required: true, unique: false},
    identificacion: {type: String, maxLength: 20, required: true, unique: true},
    tipo_identificacion: {type: String, maxLength: 20, required:true, unique: false},
    telefono: {type: Number, required: true, unique: false},
    email: {type: String, maxLength: 80, required: true, unique: true},
    direccion: {type: String, maxLength: 70, required: false, unique: false}
});

// Se indica que el modelo va a usar el esquema de datos creado anteriormente
// Entre las comillas se pone el nombre de la colección que se tendrá en la base de datos
module.exports = mongoose.model("clientes", clientSchema);