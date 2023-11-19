const Student = require('../models/student.model')

const addStudent = (req,res)=>{
    
}
const getAllStudents = async (req,res)=>{
    const student = await Student.find().exec();
    res.json(student)
}
const getStudentById = (req,res)=>{}
const updateStudentById = (req,res) => {};
const deleteStudentById = (req,res) => {};

module.exports={
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudentById,
    deleteStudentById,
}