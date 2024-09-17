const express = require("express")
const Task = require("../models/TaskModel.js")
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/controller.js")
const router = express.Router()

//Create a task
router.post("/" , createTask)

//Get all tasks
router.get("/" , getTasks)

//Get task
router.get("/:id" , getTask)

//Delete task
router.delete("/:id" , deleteTask)

//Update task
//If you want to update single column use patch instead of put
router.put("/:id" , updateTask)

module.exports = router