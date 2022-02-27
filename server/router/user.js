const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

router.post("/send", userCtrl.sendMessage);
router.get("/message", userCtrl.getMessage);

module.exports = router;
