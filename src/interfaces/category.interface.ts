import { z } from "zod";
import { createCategorySchema, readAllCategoriesSchema } from "../schemas/category.schema";
export type CreateCategory = z.infer<typeof createCategorySchema>
export type ReadAllCategories = z.infer<typeof readAllCategoriesSchema>