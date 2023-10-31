import { Router } from "express";
import { verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import {
  verifyCategoryExists,
  verifyUniqueCategoryName,
} from "../middlewares/category.middleware";
import {
  createCategoryController,
  readCategoryController,
  readRealEstateByCategoryController,
} from "../controllers/category.controller";

export const categoryRouter: Router = Router();
categoryRouter.post(
  "/",
  verifyToken,
  verifyAdmin,
  verifyUniqueCategoryName,
  createCategoryController
);
categoryRouter.get("/", readCategoryController);
categoryRouter.get(
  "/:id/realEstate",
  verifyCategoryExists,
  readRealEstateByCategoryController
);
