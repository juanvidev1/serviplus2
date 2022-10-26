const clienteOperaciones = require("../operations/ClienteOperaciones");
const router = require("express").Router();

router.get("/", clienteOperaciones.listarClientes);
router.get("/:id", clienteOperaciones.listarCliente);
router.post("/", clienteOperaciones.crearCliente);
router.put("/:id", clienteOperaciones.actualizarCliente);

module.exports = router;

