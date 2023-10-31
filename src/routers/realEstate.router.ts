import { Router } from "express";
import { verifyAddressExists } from "../middlewares/realEstate.middleware";
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middleware";
import {
  createRealEstateController,
  readAllRealEstatesController,
} from "../controllers/realEstate.controller";
import { createRealEstateSchema } from "../schemas/realEstate.schema";
import { createNewScheduleSchema } from "../schemas/schedule.schema";

export const realEstateRouter: Router = Router();
realEstateRouter.post(
  "/",
  verifyToken,
  verifyAdmin,
  validateBody(createRealEstateSchema),
  verifyAddressExists,
  createRealEstateController
);
realEstateRouter.get("/", readAllRealEstatesController);
