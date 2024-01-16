import mongoose from "mongoose";
   const studentsSchema  = mongoose.Schema({
        first_name:{
            type:String,
            required:true,
            uppercase:true
        },
        second_name:String,
        gender:{type:String,required:true},
        age:{type:Number,required:true},
        grade:{type:String,required:true},//this grade represent the class a student is in.
        createdAt:{
            type:Date,
            default:Date.now
        }
    });
    export default mongoose.model('student',studentsSchema);
