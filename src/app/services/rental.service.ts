import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalList } from '../models/rentalList';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44379/api";
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = "/Rentals/getall";
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+newPath)
  }

  getRentalList():Observable<ListResponseModel<RentalList>>{
    let newPath = "/Rentals/getlist"
    return this.httpClient.get<ListResponseModel<RentalList>>(this.apiUrl+newPath)
  }
}
