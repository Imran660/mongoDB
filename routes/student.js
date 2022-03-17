const express = require("express");
const { fetchAllStudents, addStudent, updateStudent, deleteStudent } = require("../controller/student");

const Router = express.Router();


Router.get("/getAllStudents", fetchAllStudents);
Router.post("/addStudent", addStudent);
Router.put("/updateStudent/:email", updateStudent);
Router.delete("/deleteStudent/:email", deleteStudent);

module.exports = Router;