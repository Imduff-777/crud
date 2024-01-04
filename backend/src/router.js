//arquivo separado para as rotas

const express = require("express");
const router = express.Router();
const tasksController = require("./controllers/tasksController");
const taksMiddleware = require("./middlewares/taskMiddleware")

router.get("/tasks", tasksController.getAll)
router.post("/tasks", taksMiddleware.validateBody, tasksController.createTask)
router.delete("/tasks/:id", tasksController.deleteTask)
//router.put("tasks/:id", tasksController.updateTask)

module.exports = router;