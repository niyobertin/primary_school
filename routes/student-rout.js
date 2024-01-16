import  express  from "express";
import studentController from "../controller/student.controller.js";

const router = express.Router();

router.get("/",(req,res) =>res.send('testing the the hte ht klasjkdfhklajfo router'));
router.post("/posts",studentController.createStudents);


export default router;