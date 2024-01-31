import  express  from "express";
import studentController from "../controller/student.controller.js";
import subjectController from "../controller/subject.controller.js";
const router = express.Router();
//Students router
router.post("/student/posts",studentController.createStudents);
router.get("/gets",studentController.getStudent);
router.get("/gets/:id",studentController.getOne);
router.patch("/update/:id",studentController.updateStudent);
router.delete("/delete/:id",studentController.removeStudent);
router.delete("/delete/:id",studentController.removeStudent);
router.delete("/delete",studentController.deleteAll);
//subject route
router.post('/subject/posts',subjectController.createSubject);
router.get('/subject/gets',subjectController.getSubject);
router.get('/subject/get/:id',subjectController.getUniqueSubject);
router.patch('/subject/update/:id',subjectController.updateSubject);
router.delete('/subject/delete/:id',subjectController.removeSubject);
router.delete('/subject/delete',subjectController.deleteAll);


export default router;