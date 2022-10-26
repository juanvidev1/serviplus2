const empleadoOperaciones = require("../operations/EmpleadoOperaciones");
const router = require("express").Router();

router.get("/", empleadoOperaciones.listarEmpleados);
// router.get("/:id", empleadoOperaciones.listarCliente);
router.post("/", empleadoOperaciones.crearEmpleado);
// router.put("/:id", empleadoOperaciones.actualizarCliente);

module.exports = router;