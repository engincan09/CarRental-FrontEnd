import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm:FormGroup;
  color:Color;
  colorId: number;
  constructor(private colorService:ColorService,private formBuilder:FormBuilder,private toastr:ToastrService,private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params=> {
      if(params["colorId"]){
        this.getColorDetail(params["colorId"]);
        this.colorId = parseInt(params['colorId']);
        this.createColorUpdateForm()
      }
    })
  }

  createColorUpdateForm(){
    this.colorUpdateForm = this.formBuilder.group({
      id: [this.colorId],
      name:["",Validators.required]
    })
  }
  getColorDetail(colorId:number){
    this.colorService.getColor(colorId).subscribe(response=>{this.color = response.data})
  }
  updateColor(){
    if(this.colorUpdateForm.valid){
      let colorModel = Object.assign({},this.colorUpdateForm.value);
      this.colorService.colorUpdate(colorModel).subscribe(response=>{
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


}
