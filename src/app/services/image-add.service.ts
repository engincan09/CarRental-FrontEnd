import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageAddService {

  apiUrl="https://localhost:44379/api/";
  constructor(private htppClient:HttpClient) { }

  add(image:CarImage):Observable<ResponseModel>{
    return this.htppClient.post<ResponseModel>(this.apiUrl+"CarImages/add",image)
  }
}
