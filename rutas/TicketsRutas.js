const operacionesTicket = require("../operations/TicketOperaciones");
const router = require("express").Router();

router.get("/", operacionesTicket.listarTickets);
router.get("/:id", operacionesTicket.listarTicket);
router.post("/", operacionesTicket.crearTicket);
router.put("/:id", operacionesTicket.actualizarTicket);
router.delete("/:id", operacionesTicket.eliminarTicket);

module.exports = router;