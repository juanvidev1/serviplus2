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
    const filtro = req.query;
    let listaServicios;
    if (filtro.q != null) {
        listaServicios = await servicioModelo.find({
            "$or" : [
                {"nombre_servicio": { $regex:filtro.q, $options: "i" }},
                {"tipo_servicio": { $regex:filtro.q, $options: "i" }}
            ]
        });
    } else {
        listaServicios = await servicioModelo.find(filtro);
    }
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
    try {
        const id = req.params.id;
        const servicio = await servicioModelo.findById(id);
        if (servicio != null) {
            res.status(200).send(servicio);
        } else {
            res.status(404).send("No existe el empleado con el id " + id);
        }
    } catch (error) {
        res.status(400).send("Hubo un error en la petición " + error);
    }
}


// Actualizar
servicioOperaciones.actualizarServicio = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const obj = {
            nombre_servicio: body.nombre_servicio,
            descripcion_servicio: body.descripcion_servicio,
            tipo_servicio: body.tipo_servicio,
            comentarios: body.comentarios
        }
        const servicioActualizado = await servicioModelo.findByIdAndUpdate(id, obj, {new:true});
        if (servicioActualizado != null) {
            res.status(200).send(servicioActualizado);
        } else {
            res.status(404).send("El servicio que estás tratando de actualizar no existe");
        }
    } catch (error) {
        res.status(400).send("Hubo un error en la petición " + error);
    }
}


// Eliminar
servicioOperaciones.eliminarServicio = async (req, res) => {
    try {
        const id = req.params.id;
        const servicioEliminado = await servicioModelo.findByIdAndDelete(id);
        if (servicioEliminado != null) {
            res.status(200).send("El servicio eliminado fue \n" + servicioEliminado);
        } else {
            res.status(404).send("El servicio que quieres eliminar no existe");
        }
    } catch (error) {
        res.status(400).send("Hubo un error en la petición " + error);
    }
}


module.exports = servicioOperaciones;