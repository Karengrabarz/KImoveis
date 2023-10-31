import { Router } from "express";
import { userRouter } from "./user.router";
import { categoryRouter } from "./category.router";
import { realEstateRouter } from "./realEstate.router";
import { scheduleRouter } from "./schedule.router";
import { sessionRouter } from "./session.router";

export const routes: Router = Router()

routes.use('/users', userRouter)
routes.use('/login', sessionRouter)
routes.use('/categories', categoryRouter)
routes.use('/realEstate', realEstateRouter)
routes.use('/schedules', scheduleRouter)
