const clienteOperaciones = require("../operations/ClienteOperaciones");
const clienteModelo = require("../models/ClienteModel");
const router = require("express").Router();

router.get("/", clienteOperaciones.listarClientes);
router.get("/:id", clienteOperaciones.listarCliente);
router.post("/", clienteOperaciones.crearCliente);

module.exports = router;

