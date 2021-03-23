import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { ItemResponseModel } from '../models/itemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44379/api/";
  constructor(private httpClient : HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl+"Brands/getall");
  }
  getBrand(brandId:number):Observable<ItemResponseModel<Brand>>{
    return this.httpClient.get<ItemResponseModel<Brand>>(this.apiUrl+"Brands/getbyid?brandId="+brandId)
  }

 
  addBrand(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Brands/add",brand)
  }

  updateBrand(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Brands/update",brand)
  }
    


  
}
