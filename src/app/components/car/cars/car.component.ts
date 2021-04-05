import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { UserDto } from 'src/app/models/userDto';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars : Car[] = [];
  dataLoaded = false;
  filterText="";
  isLoggedIn = false;
  userClaim:string
  constructor(
    private carService:CarService,
    private activatedRouter:ActivatedRoute,
    private toastr:ToastrService,
    private authService:AuthService,
    private userService:UserService,
    private sessionService:SessionStorageService) { }

  ngOnInit(): void {
    this.controlUserClaim();
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
    this.isLoggedIn = this.authService.isAuthenticaded();
    
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

  controlUserClaim(){
    let email = this.sessionService.getUser('email');
    this.userService.getUserAndClaim(email).subscribe(response=> {this.userClaim = response.data.claimName})
  }
}
