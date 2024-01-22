import subject from "../models/subject.js";
import subjectSchema from "../models/subject.js";
const createSubject = async(req,res) =>{
    try{
        let mid = req.body.cat;
        let ex = req.body.exame;
    await subjectSchema.create({
    subject_name:req.body.subject_name,
    cat:req.body.cat,
    exame:req.body.exame,
    total:mid + ex
    })
    .then((s) =>{
        res.send(s)
    });
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
               
                sub.marks.cat = req.body.marks || sub.marks.cat;
                sub.marks.exame = req.body.marks || sub.marks.exame;
                console.log(sub.marks.exame);
                // sub.marks = req.body.marks;
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
//removing all

const deleteAll = async(req,res)=>{
    try{
      await  subjectSchema.deleteMany()
        .then(() =>{
            res.send("Delecting all successifully")
        })
}catch(error){
res.send(error.message);
}
   
}
export default {
    createSubject,
    getSubject,
    getUniqueSubject,
    updateSubject,
    removeSubject,
    deleteAll
}
