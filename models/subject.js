import  Sequelize  from "sequelize";
import db from '../connection/connection.js';
//Subject model
const SubjectModel = db.define('Subject',{
    subName:{type:Sequelize.STRING,allowNull:false,unique: true},
    cat:{type:Sequelize.DECIMAL,defaultValue:0},
    exam:{type:Sequelize.DECIMAL,defaultValue:0},
    Total:{type:Sequelize.DECIMAL,defaultValue:0}
})
await SubjectModel.sync();
export default SubjectModel;