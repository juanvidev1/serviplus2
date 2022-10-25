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
        const listaClientes = await clienteModelo.find();  // Se utiliza el await por lo que la función es asíncrona
        if(listaClientes.length > 0) {
            res.status(200).send(listaClientes);
        } else {
            res.status(404).send("No hay datos");
        }
    } catch {
        res.status(400).send("Error en la base de datos");
    }
}

// Listar por ID
clienteOperaciones.listarPorId = async(req, res) => {
    try {
        const cliente = await clienteModelo.findOne({ identificacion: req.params.identificacion })
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

}

// Actualizar
clienteOperaciones.actualizarCliente = async (req, res) => {
    
}

module.exports = clienteOperaciones;

