const LoginOperaciones = require('../operations/LoginOperaciones');
const router = require('express').Router();

router.post("/", LoginOperaciones.empleadoLogin);

module.exports = router;