import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../models/claim';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  apiUrl = "https://localhost:44379/api";
  constructor(private httpClient:HttpClient) { }

 
}
