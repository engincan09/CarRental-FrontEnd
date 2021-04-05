import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-user-company-update',
  templateUrl: './user-company-update.component.html',
  styleUrls: ['./user-company-update.component.css']
})
export class UserCompanyUpdateComponent implements OnInit {

  companyUpdateForm:FormGroup
  constructor(private formBuilder:FormBuilder,private customerService:CustomerService,private toastr:ToastrService,private session:SessionStorageService) { }

  ngOnInit(): void {
    this.createUpdateForm();
    this.getCustomerCompany();
  }

  createUpdateForm(){
    this.companyUpdateForm = this.formBuilder.group({
      id:["",Validators.required],
      userId:["",Validators.required],
      companyName:["",Validators.required]

    })
  }
  getCustomerCompany(){
    this.customerService.getCustomerByUserId(this.session.getUser("userId")).subscribe(response=>{
      this.companyUpdateForm.get("id")?.setValue(response.data.id);
      this.companyUpdateForm.get("companyName")?.setValue(response.data.companyName);
      this.companyUpdateForm.get("userId")?.setValue(response.data.userId)
    })
  }
  companyUpdate(){
    if(this.companyUpdateForm.valid){
      let updateModel = Object.assign({},this.companyUpdateForm.value);
      this.customerService.updateCustomer(updateModel).subscribe(response=>{
        this.toastr.success(response.messages)
        window.location.reload()
        
      },responseError=> {
        if(responseError.error.Errors.length>0){
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastr.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")             
            }
        }
      })     
    }else{
      this.toastr.error("Doğrulama Hatası!");
    }
    
  }
}
