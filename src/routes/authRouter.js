import { Router } from "express";
import { signUp, login } from "../controllers/authController.js";
import userSchemaValidationMiddleware from "../middlewares/userSchemaValidationMiddleware.js";

const authRouter = Router();
authRouter.post("/sign-up", userSchemaValidationMiddleware, signUp);
authRouter.post("/login", login);

export default authRouter;