import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { ImageAddService } from 'src/app/services/image-add.service';

@Component({
  selector: 'app-car-image-add',
  templateUrl: './car-image-add.component.html',
  styleUrls: ['./car-image-add.component.css']
})
export class CarImageAddComponent implements OnInit {

  imageAddForm:FormGroup;
  cars:Car[];
  carId:number;
  constructor(private carService:CarService,private formBuilder:FormBuilder,private toastr:ToastrService,private imageService:ImageAddService) { }

  ngOnInit(): void {
    this.createImageForm();
    this.getCars();
  }


  getCars(){
    this.carService.getAllCars().subscribe(response=> this.cars=response.data)
  }
  createImageForm(){
    this.imageAddForm = this.formBuilder.group({
      carId:["",Validators.required],
      imagePath:["",Validators.required]
    })
  }

  add(){
    if(this.imageAddForm.valid){
     let imageModel = Object.assign({},this.imageAddForm.value)
      this.imageService.add(imageModel).subscribe(response=>{
        this.toastr.success(response.messages,"Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastr.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          }       
        } 
      })
    }else{
      this.toastr.error("İlgili Alanları Kontrol Ediniz.","Dikkat");
    }   
  }
}
