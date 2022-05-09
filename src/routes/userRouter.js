import { Router } from "express";
import { getUser } from "../controllers/userController.js";

//Validações
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";
import userSchemaValidationMiddleware from "../middlewares/userSchemaValidationMiddleware.js";

const userRouter = Router();

userRouter.use(tokenValidationMiddleware);
userRouter.get("/user", getUser);

export default userRouter;