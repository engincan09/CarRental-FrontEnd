import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/models/userDto';
import { AuthService } from 'src/app/services/auth.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})


export class NaviComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private sessionService:SessionStorageService,
    private userService:UserService,
) { }

  isLoggedIn = false;
  users:UserDto
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticaded();
    if(this.isLoggedIn){
        let email = this.sessionService.getUser('email');
        this.userService.getUserAndClaim(email).subscribe(response=> {
          this.users = response.data
        });
    }

  }
  logout(){
    this.sessionService.removeUser('token');
    this.sessionService.removeUser('email');
    window.location.href="";
  }

}
