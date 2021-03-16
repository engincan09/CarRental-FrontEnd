import { Car } from "./car";
import { CarImage } from "./carImage";
import { ResponseModel } from "./responseModel";

export interface CarDetailAndImageDto {
    car:Car,
    images:CarImage[]
    
}