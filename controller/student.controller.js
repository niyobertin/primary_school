import studentsSchema from "../models/student.js"
import express  from "express";

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

export default {createStudents};