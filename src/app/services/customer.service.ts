import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerDto } from '../models/customerDto';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44379/api/Customers/";
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<CustomerDto>>{
    let newPath = "getall"
    return this.httpClient.get<ListResponseModel<CustomerDto>>(this.apiUrl+newPath)
  }

  getCustomerByUserId(userId:number):Observable<ItemResponseModel<Customer>>{
    return this.httpClient.get<ItemResponseModel<Customer>>(this.apiUrl+"getcustomerbyuserid?userId="+userId)
  }

  updateCustomer(customer:Customer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",customer)
  }
}
