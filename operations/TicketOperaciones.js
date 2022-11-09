const { json } = require("express");
const modeloTicket = require("../models/TicketModel");

operacionesTicket = {}

//Crear
operacionesTicket.crearTicket = async (req, res) => {
   try {
    const obj = {
        servicio: {
            nombre_servicio: "Arreglo celular",
            descripcion_servicio: "Soporte para software de un dispositivo móvil",
            tipo_servicio: "Soporte"
        },
        cliente: {
            nombres: "Pedro",
            apellidos: "Perez",
            username: "peperez",
            identificacion: "123456",
            tipo_identificacion: "Cédula",
            email: "peperez@mail.com",
            direccion: ""
        },
        asesor: {
            nombres: "Asesor",
            apellidos: "Uno",
            username: "ases1",
            area: "Soporte",
            identificacion: "123456",
            email: "ases1@mail.com"
        },
        estado_ticket: "Asignado",
        redirigido: false,
        asesor_redirigido: {
            username: null,
            area: null
        }
    }
    // const obj = req.body;
    const ticket = new modeloTicket(obj);
    const ticketGuardado = await ticket.save();
    res.status(201).send(ticketGuardado);
   } catch (error) {
    res.status(400).send("Hubo un error en la petición " + error)
   }

}

// Listar tickets
operacionesTicket.listarTickets = async (req, res) => {
    try {
        const filtro = req.query;
        let listaTickets;
        if (filtro.q != null) {
            listaTickets = await modeloTicket.find({
                "$or" : [
                    {"servicio.nombre": { $regex:filtro.q, $options: "i" }},
                    {"cliente.username": { $regex:filtro.q, $options: "i" }},
                    {"cliente.nombres": { $regex:filtro.q, $options: "i" }},
                    {"cliente.apellidos": { $regex:filtro.q, $options: "i" }},
                    {"cliente.identificacion": { $regex:filtro.q, $options: "i" }},
                    {"cliente.email": { $regex:filtro.q, $options: "i" }},
                    {"asesor.nombres": { $regex:filtro.q, $options: "i" }},
                    {"asesor.apellidos": { $regex:filtro.q, $options: "i" }},
                    {"asesor.identificacion": { $regex:filtro.q, $options: "i" }}
                ]
            }); 
        } else {
            listaTickets = await modeloTicket.find(filtro);
        }
        if (listaTickets.length > 0) {
            res.status(200).send(listaTickets);
        } else {
            res.status(404).send(listaTickets);
        }
    } catch (error) {
        res.status(400).send("Hubo un error en la petición " + error);
    }
}

// Encontrar por id
operacionesTicket.listarTicket = async (req, res) => {
    try {
        const id = req.params.id;
        const tiquete = await modeloTicket.findById(id);
        if (tiquete != null) {
            res.status(200).send(tiquete);
        } else {
            res.status(404).send("No existe el tiquete");
        }
    } catch (error) {
        res.status(400).send("Ubo un error en la petición " + error);
    }
}


// Actualizar ticket
operacionesTicket.actualizarTicket = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const obj = {
            asesor: {
                nombres: body.asesor.nombres,
                apellidos: body.asesor.apellidos,
                username: body.asesor.username,
                area: body.asesor.area,
                identificacion: body.asesor.identificacion,
                email: body.asesor.email
            },
            estado_ticket: body.estado_ticket,
            redirigido: body.redirigido,
            asesor_redirigido: {
                username: body.asesor_redirigido.username,
                area: body.asesor_redirigido.area
            }
        }
        const tiqueteActualizado = await modeloTicket.findByIdAndUpdate(id, obj, {new:true});
        if (tiqueteActualizado != null) {
            res.status(200).send(tiqueteActualizado);
        } else {
            res.status(404).send("El ticket no existe");
        }
    } catch (error) {
        res.status(400).send("Hubo un error en la petición " + error);
    }
}


// Eliminar ticket
operacionesTicket.eliminarTicket = async (req, res) => {
    try {
        const id = req.params.id;
        const tiqueteEliminado = await modeloTicket.findByIdAndDelete(id);
        if (tiqueteEliminado != null) {
            res.status(200).send(tiqueteEliminado);
        } else {
            res.status(404).send("El tiquete no existe");
        }
    } catch (error) {
        res.status(400).send("Hubo un error en la petición " + error);
    }
}

module.exports = operacionesTicket;