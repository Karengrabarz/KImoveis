import { Router } from "express"
import { verifyScheduleExists, verifyUserScheduleExists } from "../middlewares/schedule.middleware"
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware"
import { createScheduleController, readAllScheduleByRealEstateIdController } from "../controllers/schedule.controller"
import { createNewScheduleSchema } from "../schemas/schedule.schema"

export const scheduleRouter: Router = Router()
scheduleRouter.post('/',verifyToken,validateBody(createNewScheduleSchema),verifyUserScheduleExists,verifyScheduleExists,createScheduleController)
scheduleRouter.get('/realEstate/:id',verifyToken,verifyAdmin,readAllScheduleByRealEstateIdController)