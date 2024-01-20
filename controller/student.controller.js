import studentsSchema from "../models/student.js"
//creating or posting a student.
const createStudents = async(req,res) =>{
    studentsSchema.creatw({
        first_name:req.body.first_name,
        second_name:req.body.second_name,
        gender:req.body.gender,
        age:req.body.age,
        grade:req.body.grade
    });
    res.send("Stuedent added.");

}
//Getting student all students;
const getStudent = async(req,res) =>{
    try{
        studentsSchema.find()
    .then((students) =>{
            res.send(students);
    }); 
    }catch(error){
        res.sendStatus(404);
    }
}
//Get a single students.
const getOne = async(req,res) => {
       try{
         const _id = req.params.id;
         await studentsSchema.findOne({_id})
            .then(st =>{
                res.send(st);
            })
//st stand for student.
    }catch(error){
        res.sendStatus(404);
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
    //Deleting a student
    const removeStudent = async(req,res) =>{
        try{
            const _id = req.params.id;
            await studentsSchema.deleteOne({_id});
            res.send("Student deleted!");
        }catch(error){
            res.sendStatus(404);
        }
    }
export default {
    createStudents,
    getStudent,
    getOne,
    updateStudent,
    removeStudent
};