const express = require ("express")


const studentRoute = express.Router()

const{ postController, studentLoginControll } = require("../controllers/student.controller")

const { getController} = require("../controllers/student.controller")

studentRoute.post("/", postController)
studentRoute.post("/login", studentLoginControll)


studentRoute.get("/",getController)
studentRoute.delete("/",)
studentRoute.put("/",)

module.exports = studentRoute;