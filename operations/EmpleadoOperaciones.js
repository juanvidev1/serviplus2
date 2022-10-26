const { json } = require("express");
const empleadoModelo = require("../models/EmpleadoModel"); 

const empleadoOperaciones = {}

// Crear
empleadoOperaciones.crearEmpleado = async (req, res) => {
    try {
        const obj = {
            nombres: "Empleado",
            apellidos: "Prueba VS",
            username: "empleadoprueba1",
            password: "12345",
            identificacion: "1234567890",
            tipo_identificacion: "Cédula",
            email: "empleadoprueba1@mail.com",
            admin: true
        }
        // const obj = req.body;
        const empleado = new empleadoModelo(obj);
        const empleadoGuardado = await empleado.save();
        res.status(201).send(empleadoGuardado);
    } catch (error) {
        res.status(400).send("Error creando cliente " + error);
    }
}

// Listar empleados
empleadoOperaciones.listarEmpleados = async (req, res) => {
    try {
        const filtro = req.query;
        let listaEmpleados; // Se debe crear como un let ya que vamos a modificarla dentro de un if y si fuera const no dejaría que cambie.
        if (filtro.q != null) {
            listaEmpleados = await empleadoModelo.find({
                "$or" : [
                    {"nombres": { $regex:filtro.q, $options: "i" }}, // regex = expresión regular para que busque internamiente por un parámetro q eue se haya determinado
                    {"apellidos": { $regex:filtro.q, $options: "i" }},
                    {"username": { $regex:filtro.q, $options: "i" }},
                    {"identificacion": { $regex:filtro.q, $options: "i" }},
                    {"email": { $regex:filtro.q, $options: "i"}} // Revisar como filtrar por booleano para el caso del admin
                ]
            });
        } else {
            listaEmpleados = await empleadoModelo.find();
        }
        if (listaEmpleados.length > 0) {
            res.status(200).send(listaEmpleados);
        } else {
            res.status(404).send("No hay datos de empleados");
        }
    } catch (error) {
        res.status(400).send("Hubo un error en la petición " + error);
    }
}

// Listar UN empleado
empleadoOperaciones.listarEmpleado = async (req, res) => {
    try {
        const id = req.params.id; // Se declara el id como una constante
        const empleado = await empleadoModelo.findById(id);
        if (empleado != null) {
            res.status(200).send(empleado);
        } else {
            res.status(404).send("No hay datos del empleado");
        }
    } catch (error) {
        res.status(400).send("Hu un error buscando al empleado " + error);
    }
}

// Actualizar empleado
empleadoOperaciones.actualizarEmpleado = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const obj = {
            nombres: body.nombres,
            apellidos: body.apellidos,
            password: body.password,
            telefono: body.telefono
        }
        const empleadoActualizado = await empleadoModelo.findByIdAndUpdate(id, obj, { new:true});
        if (empleadoActualizado != null) {
            res.status(200).send(empleadoActualizado);
        } else {
            res.status(404).send("No existe el empleado")
        }
    } catch (error) {
        res.status(400).send("Hubo un error sctualizando la información del empleado " + error);
    }
}

// Eliminar empleado
empleadoOperaciones.eliminarEmpleado = async (req, res) => {
    try {
        const id = req.params.id;
        const empleado = await empleadoModelo.findByIdAndDelete(id);
        if (empleado != null) {
            res.status(200).send(empleado);
        } else {
            res.status(404).send("No existe el empleado que desea eliminar")
        }
    } catch (error) {
        res.status(400).send("Hubo un error eliminando al empleado " + error);
    }
}

module.exports = empleadoOperaciones;