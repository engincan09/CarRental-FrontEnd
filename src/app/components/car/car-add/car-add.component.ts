import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { Customer } from 'src/app/models/customer';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  
  carAddForm:FormGroup;
  imageAddForm:FormGroup;
  carId:number;
  brandId:number;
  colorId:number;
  colors:Color[];
  brands:Brand[];

  constructor(
    private carService:CarService,
    private brandService:BrandService,
    private colorService:ColorService,
    private formBuilder:FormBuilder,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.createCarForm()
    this.getBrands();
    this.getColors();
  }
 
  createCarForm(){
    this.carAddForm = this.formBuilder.group({
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      dailyPrice:["",Validators.required],
      modelYear:["",Validators.required],
      description:["",Validators.required]

    });
  }

 



  getColors(){
    this.colorService.getColors().subscribe(response=> {this.colors = response.data})
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=> {this.brands = response.data})
  }
  add(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({},this.carAddForm.value);
      this.carService.addCar(carModel).subscribe(response=> {
        this.toastr.success(response.messages,"Başarılı")
        this.carId = response.data.id;
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
