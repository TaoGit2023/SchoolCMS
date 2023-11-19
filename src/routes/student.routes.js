const { Router } = require("express");
const studentRouter = Router();

const {getAllStudents,getStudentById,deleteStudentById,updateStudentById,addStudent} = require('../controllers/students.controllers')

studentRouter.get('/', getAllStudents)
studentRouter.get('/:id',getStudentById);
studentRouter.post('/',addStudent);
studentRouter.put('/:id',updateStudentById);
studentRouter.delete('/:id',deleteStudentById);

module.exports = studentRouter;
