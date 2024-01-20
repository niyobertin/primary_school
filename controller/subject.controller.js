import subject from "../models/subject.js";
import subjectSchema from "../models/subject.js";
const createSubject = async(req,res) =>{
    subjectSchema.create({
    subject_name:req.body.subject_name,
    marks:req.body.marks
    })
    try{
        await res.send('New subject added.');

    }catch(error){
        res.send(error.message);
    }
}
//getting all subject 
const getSubject = async(req,res) =>{
   await subjectSchema.find()
    .then((subjects) =>{
      try{
            res.send(subjects);
        }catch(error){
            res.send(error.message);
        }
    })
}
//Get single subject
const getUniqueSubject = async(req,res) =>{
    try{
    const _id = req.params.id;
await subjectSchema.findById({_id})
.then((subject) =>{
        res.send(subject);
});
}catch(error){
    res.sendStatus(404);
}
}
//updating subject
const updateSubject = async(req,res) =>{
    try{
        const _id = req.params.id;
     await   subjectSchema.findById({_id})
        .then((sub) =>{
            if(req.body.subject_name){
                sub.subject_name = req.body.subject_name
            }
            // special case on marks 
            if(req.body.marks){
                sub.marks = req.body.marks;
            }
            sub.save();
            res.send(sub);
        })
    }catch(error){
        res.send(error.message);
    }
}
//deleting subject
const removeSubject = async(req,res) =>{
    try{
        const _id = req.params.id;
        await subjectSchema.deleteOne({_id});
        res.send("Subject deleted!");
    }catch(error){
        res.sendStatus(404);
    }
}
export default {
    createSubject,
    getSubject,
    getUniqueSubject,
    updateSubject,
    removeSubject
}
