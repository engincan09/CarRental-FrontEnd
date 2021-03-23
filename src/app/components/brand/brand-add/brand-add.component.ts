import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAdd : FormGroup;
  constructor(private formBuilder:FormBuilder,private brandService:BrandService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }
  createBrandAddForm(){
    this.brandAdd = this.formBuilder.group({
      name:["",Validators.required]
    })
  }

  add(){
    if(this.brandAdd.valid){
      let brandModel = Object.assign({},this.brandAdd.value)
      this.brandService.addBrand(brandModel).subscribe(response=>{
        this.toastr.success("Marka Ekleme İşlemi Başarılır","Başarılı");
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
