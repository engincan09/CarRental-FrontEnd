import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailAndImageDto } from 'src/app/models/carDetailAndImageDto';
import { CardetailService } from 'src/app/services/cardetail.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserService } from 'src/app/services/user.service';
import{environment}from 'src/environments/environment';


@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails:CarDetailAndImageDto;
  imageBasePath = environment.baseUrl;
  dataLoaded = false;
  userClaim:string;
  constructor(
    private carDetailService:CardetailService,
    private activatedRouter:ActivatedRoute,
    private sessionService:SessionStorageService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params=> {
      if(params["carId"]){
        this.getCarDetail(params["carId"]);
        this.controlUserClaim();
      }
    })
  }


  getCarDetail(carId:number){
      this.carDetailService.getCarDetail(carId).subscribe(response=> {
      this.carDetails = response.data
      this.dataLoaded = true;
  
    })  
  }
  getSliderClassName(index:number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }

  controlUserClaim(){
    let email = this.sessionService.getUser("email");
    this.userService.getUserAndClaim(email).subscribe(response=> {this.userClaim = response.data.claimName});
  }
  

}
