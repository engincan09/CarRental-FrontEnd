import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars : Car[] = [];
  dataLoaded = false;
  filterText="";
  constructor(private carService:CarService,private activatedRouter:ActivatedRoute,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe(params=> {
      if(params["brandId"] && params["colorId"]){
        this.getCarBySearch(params["brandId"],params["colorId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }
      else{
        this.getAllCars();
      }
    })
  }

  getAllCars(){
    this.carService.getAllCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    });
  }
  getCarBySearch(brandId:number,colorId:number){
    this.carService.getByBrandAndColor(brandId,colorId).subscribe(response=> {
      this.cars = response.data
      if(this.cars.length == 0){
          this.toastr.info("Böyle bir araç bulunamadı!");
      }
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=> {
      this.cars=response.data
      this.dataLoaded = true
    })
  }

  getCarsByColor(colorId:number){
      this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
}
