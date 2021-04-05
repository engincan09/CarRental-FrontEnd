import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemResponseModel } from '../models/itemResponseModel';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { TokenModel } from '../models/tokenModel';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44379/api/";
  constructor(private httpClient:HttpClient,private sessionService:SessionStorageService) { }

  login(loginModel:LoginModel):Observable<ItemResponseModel<TokenModel>>{
    return this.httpClient.post<ItemResponseModel<TokenModel>>(this.apiUrl+"Auth/login",loginModel)
  }

  register(registerModel:RegisterModel):Observable<ItemResponseModel<TokenModel>>{
    return this.httpClient.post<ItemResponseModel<TokenModel>>(this.apiUrl+"Auth/register",registerModel)
  }

  isAuthenticaded(){
    if(this.sessionService.getUser('token')){
      return true;
    }else{
      return false;
    }
  }

}
