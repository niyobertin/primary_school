import subjects from '../models/subject.js';
const createSubject = async(req,res) =>{
    const{subName,cat,exam} = req.body;
    try{
    await subjects.create({
    subName,
    cat,
    exam,
    Total:cat + exam
    })
    .then((s) =>{
        res.send("Adding subject successfully ✅")
    });
     }catch(error){
           res.send(error.message);
       }
}
//getting all subject 
const getSubject = async(req,res) =>{
   await subjects.findAll()
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
    const id = parseInt(req.params.id);
await subjects.findByPk(id)
.then((subject) =>{
    if (subject) {
        res.json(subject);
    } else {
        res.sendStatus(404);
    }
});
}catch(error){
    res.send(error.message);
}
}
//updating subject
const updateSubject = async(req,res) =>{
    try{
        const id = parseInt(req.params.id);
        let {subName,cat,exam} = req.body;
        await  subjects.findByPk(id)
        .then((subject) =>{
            if(exam === undefined){
                exam = subject.exam;
            }
            if(cat === undefined){
                cat = subject.cat;
            }
          subject.update({
            subName:subName || subject.subName,
            cat:cat || subject.cat,
            exam:exam || subject.exam,
            Total: parseFloat(cat) + parseFloat(exam)
          })
          .then(() => res.send('Edit successifull'))
        })
        .catch(err => res.send(err.message));
        
    }catch(error){
        res.send(error.message);
    }
}
//deleting subject
const removeSubject = async(req,res) =>{
    try{
        const id = parseInt(req.params.id);
        await  subjects.findByPk(id)
          .then((subject) =>{
              if(!subject){
                  res.sendStatus(404);
              }else{
                  subject.destroy({restartIdentity: false})
                  .then(() => res.send("Student deleted!"))
              }
          })
    }catch(error){
        res.sendStatus(404);
    }
}
//removing all

const deleteAll = async(req,res)=>{
    try{
        await  subjects.truncate({restartIdentity: true})
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
