const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nombres: {type: String, maxLength: 60, required: true, unique: false},
    apellidos: {type: String, maxLength: 60, required: true, unique: false},
    username: {type: String, maxLength: 60, required: true, unique: false},
    identificacion: {type: Number, required: true, unique: true},
    email: {type: String, maxLength: 80, required: true, unique: true},
    tipoUsuario: {type: String, maxLength: 50, required: true, unique: true},
});

module.exports = mongoose.model("UsuarioModel", userSchema);