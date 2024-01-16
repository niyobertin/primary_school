import  express from "express";
import db from './connection/connection.js';
import router from "./routes/student-rout.js";

const app = express();
db();
app.use(express.json());
app.use('/api',router);



app.listen(8080,() => console.log('App listening on port 8080...'));