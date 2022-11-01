const { json } = require("express");
const servicioModelo = require("../models/ServicioModel");

servicioOperaciones = {}


//Crear
servicioOperaciones.crearServicio = async (req, res) => {
    try {
        /*const obj = {
            nombre_servicio: "Servicio de ejemplo",
            descripcion_servicio: "Sección descripción del servicio", 
            tipo_servicio: "Tipo servicio",
            comentarios: "Comentarios acerca del servicio"
        };*/
        const obj = req.body;
        const servicio = new servicioModelo(obj);
        const servicioGuardado = await servicio.save();
        res.status(201).send(servicioGuardado);
    } catch (error) {
        res.status(400).send("Error en la petición " + error);
    }     
}


// Listar
servicioOperaciones.listarServicios = async (req, res) => {
try {
    let listaServicios = await servicioModelo.find();
    if (listaServicios.length > 0) {
        res.status(200).send(listaServicios);
    } else {
        res.status(404).send("No existen servicios creados");
    }
} catch (error) {
    res.status(400).send("Error en la petición " + error);
}

}


// Listar servicio
servicioOperaciones.listarServicio = async (req, res) => {


}



// Actualizar
servicioOperaciones.actualizarServicio = async (req, res) => {


}


// Eliminar
servicioOperaciones.eliminarServicio = async (req, res) => {


}


module.exports = servicioOperaciones;