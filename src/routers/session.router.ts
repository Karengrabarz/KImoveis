import { Router } from "express";
import { loginController } from "../controllers/session.controller";
import { validateBody } from "../middlewares/globals.middleware";
import { userLoginSchema } from "../schemas/user.schema";

export const sessionRouter:Router = Router()

sessionRouter.post('/',validateBody(userLoginSchema),loginController)