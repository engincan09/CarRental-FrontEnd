import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserDto } from 'src/app/models/userDto';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  email:string;
  user:UserDto;
  constructor(
    private sessionService:SessionStorageService,
    private userService:UserService,
    ) { }

  ngOnInit(): void {
    this.email = this.sessionService.getUser('email');
    this.getUser();

  }

  getUser(){
   this.userService.getUserAndClaim(this.email).subscribe(response=>{
     this.user = {
       userId:response.data.userId,
       firstName:response.data.firstName,
       lastName:response.data.lastName,
       email:response.data.email,
       claimName:response.data.claimName,
       companyName:response.data.companyName,
       findeksPoint:response.data.findeksPoint     
      }});
  }

}
