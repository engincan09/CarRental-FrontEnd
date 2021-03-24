import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl = "https://localhost:44379/api/";
  constructor(private httpClient:HttpClient) { }

  add(image:CarImage):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"CarImages/add",image)

  }
}
