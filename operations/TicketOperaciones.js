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
        
    } catch (error) {
        
    }
}