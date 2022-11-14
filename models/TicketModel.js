const { default: mongoose } = require("mongoose");

const ticketSchema = mongoose.Schema({
    fecha: {type: Date, required: true, unique: false},
    servicio: {
        nombre: {type: String, maxLength: 60, required: true, unique: false},
        descripcion: {type: String, maxLength: 300, required: true, unique: false},
        tipo: {type: String, maxLength: 40, required: false, unique: false},
        comentarios: {type: String, maxLength: 300, required: false, unique: false}
    },
    cliente: {
        nombre: {type: String, maxLength: 60, required: true, unique: false},
        username: {type: String, maxLength: 60, required: true, unique: false},
        identificacion: {type: String, maxLength: 20, required: true, unique: false},
        email: {type: String, maxLength: 80, required: true, unique: false}
    },
    asesor: {
        nombres: {type: String, maxLength: 60, required: false, unique: false},
        username: {type: String, maxLength: 60, required: false, unique: false},
        area: {type:String, maxLength: 40, required: false, unique: false},
        identificacion: {type: String, maxLength: 20, required: false, unique: false},
        email: {type: String, maxLength: 80, required: false, unique: false}
    },
    estado_ticket: {type: String, maxLength: 20, required: true, unique: false},
    redirigido: {type: Boolean, required: false, unique: false},
    asesor_redirigido: {
        username: {type: String, maxLength: 60, required: false, unique: false},
        area: {type:String, maxLength: 40, required: false, unique: false}
    }

})




module.exports= mongoose.model("tickets", ticketSchema);