import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailAndImageDto } from '../models/carDetailAndImageDto';
import { ItemResponseModel } from '../models/itemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl = "https://localhost:44379/api";
  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:number):Observable<ItemResponseModel<CarDetailAndImageDto>>{
    let newPath = "/Cars/getcardetail?carId="+carId;
    return this.httpClient.get<ItemResponseModel<CarDetailAndImageDto>>(this.apiUrl+newPath)
  }

  
}
