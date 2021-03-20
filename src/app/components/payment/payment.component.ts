import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetailAndImageDto } from 'src/app/models/carDetailAndImageDto';
import { Rental } from 'src/app/models/rental';
import { CardetailService } from 'src/app/services/cardetail.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  rental:Rental;
  carDetail:CarDetailAndImageDto;
  amountOfPayment:number =0;
  constructor(
    private activatedRoute:ActivatedRoute,
    private carDetailService:CardetailService,
    private router:Router,
    private toastr:ToastrService,
    private paymentService:PaymentService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["rental"]){
        this.rental = JSON.parse(params['rental']);
        this.getRental();
        this.getCarDetail();
      }
    })
  }

  getRental(){
    console.log(this.rental);
  }

  getCarDetail(){
    this.carDetailService.getCarDetail(this.rental.carId).subscribe(response=>{
        this.carDetail = response.data,
        this.paymentCalculator()})
  }
  paymentCalculator(){
    if(this.rental.returnDate !=null){
      var date1 = new Date(this.rental.returnDate.toString())
      var date2 = new Date(this.rental.rentDate.toString())
      var difference = date1.getTime() - date2.getTime()
      var numberOfDay = Math.ceil(difference / (1000*3600*24))
      this.amountOfPayment = numberOfDay*this.carDetail.car.dailyPrice
    }
    if(this.amountOfPayment <=0){
      this.router.navigate(["/cars"]);
      this.toastr.error("Araç Listesine Dönülüyor.","Başarısız İşlem");
    }
  }

  pay(){
    this.paymentService.pay(this.rental,this.amountOfPayment).subscribe(response=>{
      this.router.navigate(['/cars']),
      this.toastr.success("İşlem Başarılı.")})
  }

}
