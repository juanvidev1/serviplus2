const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    nombres: {type: String, maxLength: 60, required: true, unique: false},
    apellidos: {type: String, maxLength: 60, required: true, unique: false},
    username: {type: String, maxLength: 60, required: true, unique: false},
    password: {type:String, maxLength: 30, required: true, unique: false},
    identificacion: {type: String, maxLength: 20, required: true, unique: true},
    tipo_identificacion: {type: String, maxLength: 20, required:true, unique: false},
    email: {type: String, maxLength: 80, required: true, unique: true},
    admin: {type: Boolean, required: true, unique: false},
});

module.exports = mongoose.model("UsuarioModel", employeeSchema);