import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { SessionStorageService } from '../services/session-storage.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ControlClaimGuard implements CanActivate {
  claim:String
  constructor(private authService:AuthService,private toastrService:ToastrService,private router:Router,private userService:UserService,private sessionService:SessionStorageService){
    let email = this.sessionService.getUser('email');
    this.userService.getUserAndClaim(email).subscribe(response=> {this.claim = response.data.claimName})
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.claim === "admin"){
        return true;
      }else{
        this.toastrService.error("Bu işlem İçin Yetkiniz Bulunmamakta.");
        this.router.navigate([""])
        return false;
      }
  }
  
}
