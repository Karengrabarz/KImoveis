import { RealEstate, User } from "../entities"
import AppError from "../errors/AppError.error"
import { CreateSchedule } from "../interfaces/schedule.interface"
import { realEstateRepo, scheduleRepo, userRepo } from "../repositories"

export const createScheduleService = async (data: CreateSchedule, userId: number): Promise<void> => {
    const newDate = new Date(data.date).getDay()

    if((newDate ===5 ) || (newDate === 6)) throw new AppError('Invalid date, work days are monday to friday', 400)
    const time = Number(data.hour.split(':')[0])
    if((time < 8) || (time > 18)) throw new AppError('Invalid hour, available times are 8AM to 18PM', 400)

    const realEstate: RealEstate | null = await realEstateRepo.findOneBy({id: data.realEstateId})
    console.log(realEstate)
        if(!realEstate) throw new AppError('RealEstate not found',404)
    const user: User | null = await userRepo.findOneBy({id: userId})
        if(!user) throw new AppError('User not found',404)
  
    await scheduleRepo.save({...data, realEstate: realEstate!, user: user!})
  }
  
  export const readAllScheduleByRealEstateIdService = async (idRead: number): Promise<any> => {
    const realEstate: RealEstate | null = await realEstateRepo.findOne({
      where: {
        id:idRead
      },
      relations: {
        address: true,
        category: true,
        schedules: {
          user: true
        }
      }
    })
  
    if(!realEstate) throw new AppError('RealEstate not found', 404)
  
    return realEstate
  }