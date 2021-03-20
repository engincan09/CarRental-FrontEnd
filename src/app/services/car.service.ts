import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

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

  


}
