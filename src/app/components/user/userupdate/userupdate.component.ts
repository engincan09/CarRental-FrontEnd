import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {

  updateForm:FormGroup;
  email:string
  user:User;
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private sessionService:SessionStorageService,
    private toastr:ToastrService) {}

  ngOnInit(): void {
 
   
    this.createUpdateForm();
    this.email = this.sessionService.getUser('email');
    this.getUser();
            
  }
  getUser(){
   
    this.userService.getUser(this.email).subscribe(response=> {this.user = response.data});
    console.log(this.email)
  }
  createUpdateForm(){
    this.updateForm = this.formBuilder.group({
      id:[""],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }

  update(){
    if(this.updateForm.valid){
      let updateModel = Object.assign({},this.updateForm.value)
      this.userService.updateUser(updateModel).subscribe(response=> {
        this.toastr.success(response.messages)
        window.location.href='userinfo';   
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
