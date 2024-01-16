import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    subject_name:{type:String,required:true,unique:true},
    marks:{
        cat:{type:Number,default:0},
        exame:{type:Number,default:0},
        total:{type:Number,default:0}
    }
})

export default  mongoose.model("subject",subjectSchema);