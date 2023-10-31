import { NextFunction, Request, Response } from "express";
import { Schedule } from "../entities";
import { scheduleRepo } from "../repositories";
import AppError from "../errors/AppError.error";

export const verifyUserScheduleExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let { sub } = res.locals.decoded;
  sub = Number(sub);
  const { hour, date } = req.body;

  const schedule: Schedule | null = await scheduleRepo.findOne({
    where: {
      user: {
        id: sub,
      },
      date,
      hour,
    },
  });

  if (schedule)
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );

  return next();
};

export const verifyScheduleExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId, hour, date } = req.body;

  const schedule: Schedule | null = await scheduleRepo.findOne({
    where: {
      realEstate: {
        id: Number(realEstateId),
      },
      hour,
      date,
    },
  });
  if (schedule)
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );

  return next();
};
