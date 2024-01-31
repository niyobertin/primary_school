import dotenv from 'dotenv';
import  express from "express";
import db from './connection/connection.js';
import router from "./routes/rout.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use('/api',router);
app.listen(process.env.PORT,
    () => console.log(`Server is running on ${process.env.PORT}..`)
    );