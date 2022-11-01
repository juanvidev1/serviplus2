const servicioOperaciones = require('../operations/ServicioOperaciones');
const router = require('express').Router();

router.get("/", servicioOperaciones.listarServicios);
// router.get("/:id", servicioOperaciones.listarServicio);
router.post("/", servicioOperaciones.crearServicio);



module.exports = router;