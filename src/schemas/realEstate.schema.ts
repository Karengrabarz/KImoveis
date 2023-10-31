import { z } from "zod";

export const realEstateSchema = z.object({
  id: z.number().positive(),
  value: z.string().or(z.number()).default(0),
  size: z.number().positive().int(),
  sold: z.boolean().default(false),
  createdAt: z.string(),
  updateAt: z.string(),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number().int().positive(),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
  categoryId: z.number().int().positive(),
});

export const createRealEstateSchema = realEstateSchema.omit({
  id: true,
  createdAt: true,
  updateAt: true,
});
