import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm:FormGroup
  constructor(private colorService:ColorService,private formBuilder:FormBuilder,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.createColorAddForm()
  }
  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({name:["",Validators.required]})
  }
  add(){
    if(this.colorAddForm.valid){
      let colorModel = Object.assign({},this.colorAddForm.value);
      this.colorService.addColor(colorModel).subscribe(response=>{
        this.toastr.success("Ekleme İşlemi Başarılı!","Başarı")
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

}
