const clienteModelo = require("../models/ClienteModel");
const empleadoModelo = require("../models/EmpleadoModel");
const bcrypt = require("bcrypt");

const LoginOperaciones = {};

const compararPassword = async (recibido, guardado) => {
    return await bcrypt.compare(recibido, guardado);
}

LoginOperaciones.clienteLogin = async (req, res) => {
    try {
        const email = req.body.email;
        let password = req.body.password;
        const cliente = await clienteModelo.findOne( {email: email} );
        console.log(cliente);
        if (cliente != null) {
            const result = await compararPassword(password, cliente.password);
            console.log(result);
            if (result) {
                const acceso = {
                    id: cliente._id,
                    nombres: cliente.nombres + " " + cliente.apellidos,
                    username: cliente.username,
                    identificacion: cliente.identificacion,
                    tipo_identificacion: cliente.tipo_identificacion,
                    email: cliente.email,
                    telefono: cliente.telefono,
                    direccion: cliente.direccion + " " + cliente.departamento + " " + cliente.ciudad
                }
                res.status(200).json(acceso)
            } else {
                res.status(401).send("Email o contraseña incorrectos");
            }
        } else {
            res.status(401).send("Email o contraseña incorrectos");
        }
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

LoginOperaciones.empleadoLogin = async (req, res) => {
    try {
        const email = req.body.email;
        let password = req.body.password;
        console.log(req.body);
        const empleado = await empleadoModelo.findOne( {email: email} );
        console.log(empleado);
        if (empleado != null) {
            const result = await compararPassword(password, empleado.password);
            console.log(result);
            if (result) {
                const acceso = {
                    id: empleado._id,
                    nombres: empleado.nombres + " " + empleado.apellidos,
                    username: empleado.username,
                    area: empleado.area,
                    identificacion: empleado.identificacion,
                    email: empleado.email,
                    admin: empleado.admin
                }
                res.status(200).json(acceso)
            } else {
                res.status(401).send("Email o contraseña incorrectos");
            }
        } else {
            res.status(401).send("Email o contraseña incorrectos");
        }
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

module.exports = LoginOperaciones;
