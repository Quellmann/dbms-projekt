import { Router } from "express";
import {
	getUsers,
	updateUserRole,
	getStudents,
	updateUserInformation,
} from "../controllers/userController.js";
import { verifyAdmin, verifyTeacher } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/users", verifyAdmin, getUsers);
router.patch("/users/:username/role", verifyAdmin, updateUserRole);
router.get("/students", verifyTeacher, getStudents);
router.patch("/users/:username", updateUserInformation);

export default router;
