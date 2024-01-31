import  Sequelize  from "sequelize";
import db from '../connection/connection.js';
//Student model
const StudentModel = db.define('Student',{
    fname:{type:Sequelize.STRING,allowNull:false},
    sname:{type:Sequelize.STRING},
    gender:{type:Sequelize.STRING,allowNull:false},
    age:{type:Sequelize.INTEGER,allowNull:false},
    grade:{type:Sequelize.STRING,allowNull:false}
})
await StudentModel.sync();
export default StudentModel;

