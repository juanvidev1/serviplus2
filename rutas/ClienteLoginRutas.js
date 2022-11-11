const LoginOperaciones = require('../operations/LoginOperaciones');
const router = require('express').Router();

router.post("/", LoginOperaciones.clienteLogin);


module.exports = router;