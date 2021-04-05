import { Injectable } from '@angular/core';
import { CarService } from './car.service';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class CheckFindeksService {

  userFindesk:number;
  carFindeks:number;
  constructor(private customerService:CustomerService,private carService:CarService) { }

  checkFindeksPoint(userId:number,carId:number){
    this.getCarFindeks(carId);
    this.getCustomerFindeks(userId) 
    if(this.userFindesk >= this.carFindeks) {
      return true;
    }else{
      return false;
    }
  }

  getCarFindeks(carId:number){
    this.carService.getCarsById(carId).subscribe(response=> {this.carFindeks = response.data.findeksPoint});
  }
  getCustomerFindeks(customerId:number){
    this.customerService.getCustomerByUserId(customerId).subscribe(response=>{this.userFindesk = response.data.findeksPoint})
  }

}
