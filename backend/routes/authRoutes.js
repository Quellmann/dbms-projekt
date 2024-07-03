import { Router } from "express";
import {
	login,
	register,
	resetPassword,
	createPassword,
} from "../controllers/authController.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/reset-password", resetPassword);
router.post("/create-password/:token", createPassword);

export default router;
