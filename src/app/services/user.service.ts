import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';
import { UserDto } from '../models/userDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44379/api/";
  constructor(private httpClient:HttpClient) { }

  getUserAndClaim(email:string):Observable<ItemResponseModel<UserDto>>{
    return this.httpClient.get<ItemResponseModel<UserDto>>(this.apiUrl+"Users/getuser?email="+email)
  }

  getUser(email:string):Observable<ItemResponseModel<User>>{
    return this.httpClient.get<ItemResponseModel<User>>(this.apiUrl+"Users/getbyemail?email="+email)
  }

  updateUser(user:User):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Users/update",{
      user:{
        'id': user.id,
        'firstName': user.firstName,
        'lastName': user.lastName,
        'email': user.email, 
      },
      password:user.password
    });
  }
}
