import { z } from "zod";
import { createRealEstateSchema } from "../schemas/realEstate.schema";


export type CreateRealEstate = z.infer<typeof createRealEstateSchema>