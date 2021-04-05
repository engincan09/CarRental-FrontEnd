import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timer } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(
    private toastrService:ToastrService,
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private sessionService:SessionStorageService,
    private router:Router
  ) { }
    roles : string[];
  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value);
      this.authService.login(loginModel).subscribe(response=> {
        this.toastrService.success(response.messages,"Başarılı!");
        this.sessionService.saveUser('token',response.data.token);
        this.sessionService.saveUser('email',this.loginForm.value.email);
        this.sessionService.saveUser('userId',response.data.userId.toString());
        timer(3000).subscribe(p=>{
          window.location.href='';
        });
     
      
     
      },errorResponse=> this.toastrService.error(errorResponse.error.messages));
    }
  }
}
