//arquivo separado para as rotas

const express = require("express");
const router = express.Router();
const tasksController = require("./controllers/tasksController");

router.get("/tasks", tasksController.getAll)
router.post("/tasks", tasksController.createTask)
router.delete("/tasks/:id", tasksController.deleteTask)

module.exports = router;