const servicioOperaciones = require('../operations/ServicioOperaciones');
const router = require('express').Router();

router.get("/", servicioOperaciones.listarServicios);
router.get("/:id", servicioOperaciones.listarServicio);
router.post("/", servicioOperaciones.crearServicio);
router.put("/:id", servicioOperaciones.actualizarServicio);
router.delete("/:id", servicioOperaciones.eliminarServicio);

module.exports = router;