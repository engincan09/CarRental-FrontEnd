import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm:FormGroup;
  brand:Brand;
  brandId:number;
  constructor(private brandService:BrandService,private formBuilder:FormBuilder,private toastr:ToastrService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.brandId = parseInt(params['brandId']);
        this.getBrand(params["brandId"])
        this.createUpdateForm();

      }
    })
    
  }
  createUpdateForm(){
    this.brandUpdateForm = this.formBuilder.group({
      name:["",Validators.required],
      id:this.brandId
    })
  }
  updateBrand(){
    if(this.brandUpdateForm.valid){
      let brandModel = Object.assign({},this.brandUpdateForm.value);
      this.brandService.updateBrand(brandModel).subscribe(response=>{
        this.toastr.success(response.messages,"Başarılı");
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
           this.toastr.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")           
          }
        }
      })
    }else{
      this.toastr.error("İlgili Alanları Kontrol Ediniz.","Dikkat");
    }
  }


  getBrand(brandId:number){
    this.brandService.getBrand(brandId).subscribe(response=> {this.brand=response.data})
  }
}
