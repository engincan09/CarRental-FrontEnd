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
    this.activatedRouter.params.subscribe(params=> {
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
    this.carService.getByBrandAndColor(colorId,brandId).subscribe(response=> {
      this.cars = response.data
      this.dataLoaded = true;
      if(this.cars.length == 0){
          this.toastr.error("Böyle bir araç bulunamadı.","Uyarı!");
      }else{
        this.toastr.success("Araçlar Listelendi.","Başarılı!");
      }
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=> {
      this.cars=response.data
      this.dataLoaded = true
      if(this.cars.length == 0){
        this.toastr.error("Böyle bir araç bulunamadı.","Uyarı!");
    }else{
      this.toastr.success("Araçlar Listelendi.","Başarılı!");
    }
    })
  }

  getCarsByColor(colorId:number){
      this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
      if(this.cars.length == 0){
        this.toastr.error("Böyle bir araç bulunamadı.","Uyarı!");
    }else{
      this.toastr.success("Araçlar Listelendi.","Başarılı!");
    }
    })
  }
}
