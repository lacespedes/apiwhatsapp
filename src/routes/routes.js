const { Router } = require("express");
const { VerifyToken, ReceiveMessage } = require("../controllers/whatsappControllers");

const router = Router();

router.get("/", VerifyToken);
router.post("/", ReceiveMessage);

module.exports = router;