const {Schema,model} = require('mongoose');

const studentSchema = new Schema({
    firstName:{
        type:String,
        require
    },
    lastName:{
        type: String,
        required:true,
    },
    email:{
        type:String,
    },
});

const Student = model('Student', studentSchema); //collection name
module.exports = Student;
