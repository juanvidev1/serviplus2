const { json } = require("express");
const servicioModelo = require("../models/ServicioModel");

servicioOperaciones = {}


//Crear
servicioOperaciones.crearServicio = async (req, res) => {


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