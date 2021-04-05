import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { Car } from '../models/car';
import { CarUpdateModel } from '../models/carUpdateModel';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44379/api";
  constructor(private httpClient:HttpClient) { }

  getAllCars():Observable<ListResponseModel<Car>>{
    let newPath = "/Cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl+newPath)
  }

  getCarsById(carId:number):Observable<ItemResponseModel<CarUpdateModel>>{
    let newPath = "/Cars/getbyid?carId="+carId;
    return this.httpClient.get<ItemResponseModel<CarUpdateModel>>(this.apiUrl+newPath);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = "/Cars/getbybrand?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl+newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = "/Cars/getbycolor?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl+newPath)
  }

  getByBrandAndColor(colorId:number,brandId:number):Observable<ListResponseModel<Car>>{
  
    let newPath = "/Cars/getbybrandandcolor?brandId="+brandId+"&"+"colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl+newPath)
  }
  addCar(car:Car):Observable<ItemResponseModel<Car>>{
    return this.httpClient.post<ItemResponseModel<Car>>(this.apiUrl+"/Cars/add",car)
  }
  updateCar(car:Car):Observable<ItemResponseModel<CarUpdateModel>>{
    return this.httpClient.post<ItemResponseModel<CarUpdateModel>>(this.apiUrl+"/Cars/update",car)
  }

  


}
