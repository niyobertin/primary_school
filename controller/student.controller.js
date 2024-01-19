import studentsSchema from "../models/student.js"
import express  from "express"
//creating or posting a student.
const createStudents = async(req,res) =>{
    const students = new studentsSchema({
        first_name:req.body.first_name,
        second_name:req.body.second_name,
        gender:req.body.gender,
        age:req.body.age,
        grade:req.body.grade
    });
    await students.save();
    res.send(students);

}

//Getting student all students;
const getStudent = async(req,res) =>{
    try{studentsSchema.find()
    .then((data) =>{
            res.send(data);
    }); 
    }catch(error){
        console.log(error.message);
    }
}
//Get a single students.
const getOne = async(req,res) => {
       try{
         const _id = req.params.id;
         await studentsSchema.findOne({_id})
            .then(data =>{
                res.send(data);
            })

    }catch(error){
        res.status(404).send("404 Not Found");
    }
    }
    //updating student 
    const updateStudent = async(req,res) =>{
        try{
            const _id = req.params.id;
            const updatedStudent = await studentsSchema.findOne({_id});
            if(req.body.first_name){
                updatedStudent.first_name = req.body.first_name;
            }
            if(req.body.second_name){
                updatedStudent.second_name = req.body.second_name
            }
            if(req.body.gender){
                updatedStudent.gender = req.body.gender
            }
            if(req.body.age){
                updatedStudent.age = req.body.age;
            }
            if(req.body.grade){
                updatedStudent.grade = req.body.grade;
            }
            updatedStudent.save();
            res.send("Update successifuly!")
        }catch(error){
            res.send(error.message);
        }
    }

export default {
    createStudents,
    getStudent,
    getOne,
    updateStudent
};