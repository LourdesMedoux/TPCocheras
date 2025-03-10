import { Router } from "express";
import {methods as authController} from "../controllers/authController";
const router=Router();

router.post("/login",authController.login);
router.post("/register",authController.register);


export default router;