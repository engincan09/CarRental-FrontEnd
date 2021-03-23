import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44379/api/";
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl+"Colors/getall")
  }
  addColor(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Colors/add",color)
  }

  getColor(colorId:number):Observable<ItemResponseModel<Color>>{
    return this.httpClient.get<ItemResponseModel<Color>>(this.apiUrl+"Colors/getbyid?colorId="+colorId)
  }

  colorUpdate(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Colors/update",color)
  }
}
