import dotenv from "dotenv";
import Sequelize from 'sequelize';
dotenv.config();
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    port: 5432,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
//Database connection testing.
db.authenticate()
    .then(() => console.log("Database connection sucessfully"))
    .catch(err => console.log(`Unable to connect to a database ${err}`));


export default db;