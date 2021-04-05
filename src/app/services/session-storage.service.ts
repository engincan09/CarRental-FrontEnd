import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { ClaimService } from './claim.service';


@Injectable({
  providedIn: 'root'
})

export class SessionStorageService {


  constructor(private claimService:ClaimService) { }


   saveUser(key:string,value:string):void{
    window.sessionStorage.removeItem(key);
    window.sessionStorage.setItem(key,value);
   }

   getUser(key:string):any{
   return window.sessionStorage.getItem(key);
   }

   removeUser(key:string){
     window.sessionStorage.removeItem(key)
     window.sessionStorage.removeItem(key)
   }
  
   
   

}
