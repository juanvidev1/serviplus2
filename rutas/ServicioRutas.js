const servicioOperaciones = require('../operations/ServicioOperaciones');
const router = require('express').Router();

router.get("/", servicioOperaciones.listarServicios);



module.exports = router;