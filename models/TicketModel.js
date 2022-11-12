const { default: mongoose } = require("mongoose");

const ticketSchema = mongoose.Schema({
    servicio: {
        nombre_servicio: {type: String, maxLength: 60, required: true, unique: false},
        descripcion_servicio: {type: String, maxLength: 300, required: true, unique: false},
        tipo_servicio: {type: String, maxLength: 40, required: false, unique: false},
        comentarios: {type: String, maxLength: 300, required: false, unique: false}
    },
    cliente: {
        nombre: {type: String, maxLength: 60, required: true, unique: false},
        username: {type: String, maxLength: 60, required: true, unique: false},
        identificacion: {type: String, maxLength: 20, required: true, unique: true},
        email: {type: String, maxLength: 80, required: true, unique: true}
    },
    asesor: {
        nombres: {type: String, maxLength: 60, required: false, unique: false},
        username: {type: String, maxLength: 60, required: false, unique: false},
        area: {type:String, maxLength: 40, required: false, unique: false},
        identificacion: {type: String, maxLength: 20, required: false, unique: true},
        email: {type: String, maxLength: 80, required: false, unique: true}
    },
    estado_ticket: {type: String, maxLength: 20, required: true, unique: false},
    redirigido: {type: Boolean, required: false, unique: false},
    asesor_redirigido: {
        username: {type: String, maxLength: 60, required: false, unique: false},
        area: {type:String, maxLength: 40, required: false, unique: false}
    }

})




module.exports= mongoose.model("tickets", ticketSchema);