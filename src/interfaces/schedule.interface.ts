import { z } from "zod";
import { createNewScheduleSchema } from "../schemas/schedule.schema";

export type CreateSchedule = z.infer<typeof createNewScheduleSchema>;
