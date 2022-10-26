// Se importa el Modelo
// Con el .. entre el string y antes del / le indico al código que salga de la carpeta actual y entre a otra
const { json } = require("express");
const clienteModelo = require("../models/ClienteModel"); 

const clienteOperaciones = {}


// Se pueden crear las operaciones del CRUD como métodos de una constante tipo objeto
// Todas las funciones son asicnrónicas

// Crear
clienteOperaciones.crearCliente = async (req, res) => {
    
    try {
        // Se debe crear un registro dummie. Un objeto de ejemplo)
        /*const obj = {
            nombres: "Juan",
            apellidos: "Reyes",
            username: "juanvireyes",
            identificacion: 1023654789,
            telefono: 123456789,
            email: "juan@mail.com",
            direccion: "calle falsa 123"
        }*/
        // Para poder enviar el body desde la petición y no el dummie, se utiliza req.body
        const obj = req.body;

        // Luego se crea un nuevo cliente utilizando el objeto dummie
        const cliente = new clienteModelo(obj);
        const clienteGuardado = await cliente.save();
        res.status(201).send(clienteGuardado);
    } catch (error) {
        res.status(400).send("Error creando cliente. " + error);
    }
}

// Listar
clienteOperaciones.listarClientes = async (req, res) => {
    // Se crea una constante para almacenar el método find aplicado al modelo del cliente (en este caso)     
    try{
        const filtro = req.query; // Esto es para los filtros por query params (los que se concatenan con ?queryParam1=value1&queryParam2). OJO Debe validarse
        let listaClientes;
        if (filtro.q != null) {
            listaClientes = await clienteModelo.find({
                "$or" : [
                    {"nombres": { $regex:filtro.q, $options: "i" }}, // regex = expresión regular para que busque internamiente por un parámetro q eue se haya determinado
                    {"apellidos": { $regex:filtro.q, $options: "i" }},
                    {"username": { $regex:filtro.q, $options: "i" }},
                    {"identificacion": { $regex:filtro.q, $options: "i" }},
                    {"email": { $regex:filtro.q, $options: "i"}}
                ]
            });  
        } else {
            listaClientes = await clienteModelo.find(filtro);
        }
        if (listaClientes.length > 0) {
            res.status(200).send(listaClientes);
        } else {
            res.status(404).send("No hay datos");
        }
    } catch {
        res.status(400).send("Error en la peticion " + error);
    }
}

// Listar por ID
clienteOperaciones.listarCliente = async (req, res) => {
    try {
        const id = req.params.id; // Por buena práctica se llama por el id para el filtrado por parámtero
        const cliente = await clienteModelo.findById(id);
        if(cliente != null) {
            res.status(200).send(cliente);
        } else {
            res.status(404).send("El cliente no existe");
        }
    } catch (error) {
        res.status(400).send("Error en la petición. " + error);
    }
}

// Eliminar
clienteOperaciones.eliminarCliente = async (req, res) => {
    try {
        const id = req.params.id;
        const cliente = await clienteModelo.findByIdAndDelete(id);
        if (cliente != null) {
            req.status(200).send(cliente);
        } else {
            req.status(404).send("No hay datos del cliente");
        }
    } catch (error) {
        req.status(400).send("Hubo un error en la petición " + error);
    }
}


// Actualizar -Put
clienteOperaciones.actualizarCliente = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const obj = {
            nombres: body.nombres,
            apellidos: body.apellidos,
            password: body.password,
            telefono: body.telefono,
            direccion: body.direccion
        }
        const clienteActualizado = await clienteModelo.findByIdAndUpdate(id, obj, { new : true });
        if (clienteActualizado != null) {
            res.status(200).send(cliente);
        } else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Petición incorrecta " + error);
    }

}


module.exports = clienteOperaciones;

