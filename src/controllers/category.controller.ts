import { Request, Response } from "express";
import {
  createCategoryService,
  readCategoryService,
  readRealEstateByCategoryService,
} from "../services/category.service";

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const category = await createCategoryService(req.body);

  return res.status(201).json(category);
};

export const readCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories = await readCategoryService();

  return res.status(200).json(categories);
};

export const readRealEstateByCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const realEstate = await readRealEstateByCategoryService(Number(id));

  return res.status(200).json(realEstate);
};
