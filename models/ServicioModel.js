const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
    nombre_servicio: {type: String, maxLength: 60, required: true, unique: true},
    descripcion_servicio: {type: String, maxLength: 300, required: true, unique: false},
    tipo_servicio: {type: String, maxLength: 40, required: true, unique: false},
    comentarios: {type: String, maxLength: 300, required: false, unique: false}
});

module.exports = mongoose.model("servicios", serviceSchema);