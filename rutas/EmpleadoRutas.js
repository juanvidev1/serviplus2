const empleadoOperaciones = require("../operations/EmpleadoOperaciones");
const router = require("express").Router();

router.get("/", empleadoOperaciones.listarEmpleados);
router.get("/:id", empleadoOperaciones.listarEmpleado);
router.post("/", empleadoOperaciones.crearEmpleado);
router.put("/:id", empleadoOperaciones.actualizarEmpleado);
router.delete("/:id", empleadoOperaciones.eliminarEmpleado);

module.exports = router;