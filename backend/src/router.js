//arquivo separado para as rotas

const express = require("express");
const router = express.Router();

router.get("/", (req,res) => res.send("router test"))

module.exports = router;