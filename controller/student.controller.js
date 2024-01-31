import students from '../models/student.js';
//creating or posting a student.
const createStudents = async(req,res) =>{
   const {fname,sname,gender,age,grade} = req.body;
  await students.create({
    fname,
    sname,
    gender,
    age,
    grade
   })
    .then(() => res.send("Adding student successfully ✅"))
    .catch((err) =>res.send(err.message))
}
//Getting student all students;
const getStudent = async(req,res) =>{
    try{
        students.findAll()
    .then((sts) =>{
        if (sts) {
            res.json(sts);
        } else {
            res.sendStatus(404);
        }
    }); 
    }catch(error){
        res.sendStatus(404);
    }
}
//Get a single students.
const getOne = async(req,res) => {
       try{
         const id = parseInt(req.params.id);
         await students.findByPk(id)
            .then(st =>{
                if (st) {
                    res.json(st);
                } else {
                    res.sendStatus(404);
                }
            })
        //st stand for student.
    }catch(error){
        res.status(404);
    }
    }
    //updating student 
    const updateStudent = async(req,res) =>{
        try{
            const {fname,sname,gender,age,grade} = req.body;
            const id = parseInt(req.params.id);
            students.findByPk(id)
            .then((st =>{
                st.update({
                    fname:fname || st.fname,
                    sname:sname || st.sname,
                    gender:gender || st.gender,
                    age:age || st.age,
                    grade:grade || st.grade 
                })
                .then(()=>{
                    res.send("Update successifuly!")
                })
                .catch(err => console.log(err.message));
            }))
            
        }catch(error){
            res.send(error.message);
        }
    }
    //Deleting a student
    const removeStudent = async(req,res) =>{
        try{
            const id = parseInt(req.params.id);
            await students.findByPk(id)
            .then((st) => {
                if(!st){
                    res.sendStatus(404);
                }else{
                    st.destroy({restartIdentity: false})
                    .then(() => res.send("Student deleted!"))
                }
            });
        }catch(error){
            res.send(error.message);
        }
    }
    //removing all
const deleteAll = async(req,res)=>{
    try{
      await  students.truncate({restartIdentity: true})
        .then(() =>{
            res.send("Delecting all successifully")
        })
}catch(error){
res.send(error.message);
}   
}
export default {
    createStudents,
    getStudent,
    getOne,
    updateStudent,
    removeStudent,
    deleteAll
};