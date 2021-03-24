import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-car-image-add',
  templateUrl: './car-image-add.component.html',
  styleUrls: ['./car-image-add.component.css']
})
export class CarImageAddComponent implements OnInit {

 
  imageAddForm:FormGroup;
  cars:Car[];
  constructor(
    private imageService:ImageService,
    private toastr:ToastrService,
    private formBuilder:FormBuilder,
    private carService:CarService
    ) { }
    
    


  ngOnInit(): void {
  this.getCars();
  this.createImageAddForm();
  }

  createImageAddForm(){
    this.imageAddForm = this.formBuilder.group({
      carId:["",Validators.required],
      imagePath:["",Validators.required],
    });
  }
  add(){

    if(this.imageAddForm.valid){
      let imageModel = Object.assign({},this.imageAddForm.value);
      console.log(imageModel);
      this.imageService.add(imageModel).subscribe((response)=>{
        console.log(response);
        this.toastr.success(response.messages,"Başarılı");
      },(responseError)=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastr.error(responseError.error.Erros[i].ErrorMessage,"Doğrulama Hatası");        
          }
        }
      })
    }else{
      this.toastr.error("İlgili alanları kontrol ediniz.!","Hata!")
    }
    
  }

  getCars(){
    this.carService.getAllCars().subscribe((response)=>{this.cars=response.data})
  }
}
