import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { CustomerDto } from 'src/app/models/customerDto';
import { Rental } from 'src/app/models/rental';
import { CheckFindeksService } from 'src/app/services/check-findeks.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  customers:CustomerDto[];
  customerId:number;
  rentDate:Date;
  returnDate:Date;
  @Input() car:Car;
  constructor(
    private customerService:CustomerService,
    private router:Router,
    private toastr:ToastrService,
    private activatedRouter:ActivatedRoute,
    private findeksService:CheckFindeksService) { }

  ngOnInit(): void {
    this.getCustomer();
  }
  getCustomer(){
    this.customerService.getCustomers().subscribe(response=>{this.customers = response.data});
  }
  getRentDate(){
    var today = new Date();
    today.setDate(today.getDate()+1);
    return today.toISOString().slice(0,10)
  }
  getReturnDate(){
    var today = new Date();
    today.setDate(today.getDate()+2)
    return today.toISOString().slice(0,10)
  }
  createRental(){
    let rental:Rental = {
      rentDate: this.rentDate,
      returnDate:this.returnDate,
      carId:this.car.id,
      customerId : parseInt(this.customerId.toString()) 
    }
    var result = this.findeksService.checkFindeksPoint(rental.carId,rental.customerId);
    if(result === true){
      this.router.navigate(['/payment/',JSON.stringify(rental)])
      this.toastr.info("Ödeme sayfasına yönlendiriliyorsunuz.","Ödeme");
    }else{
      this.toastr.error("Aracı Kiralayabilmek İçin Yeteri Kadar Findeks Puanınız Bulunmamakta.","Hata");

    }
   

  }

}
