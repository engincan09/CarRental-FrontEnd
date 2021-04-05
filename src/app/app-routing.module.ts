import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import{BrandComponent}from './components/brand/brands/brand.component';
import { CarComponent } from './components/car/cars/car.component';
import { CardetailComponent } from './components/car/cardetail/cardetail.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { ControlClaimGuard } from './guards/control-claim.guard';
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { UserupdateComponent } from './components/user/userupdate/userupdate.component';
import { UserrentalsComponent } from './components/user/userrentals/userrentals.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { UserCompanyComponent } from './components/user/user-company/user-company.component';



const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent},
  {path:"cars",component:CarComponent},
  {path:"brands",component:BrandListComponent,canActivate:[LoginGuard,ControlClaimGuard]},
  {path:"colors",component:ColorListComponent,canActivate:[LoginGuard,ControlClaimGuard]},
  {path:"rentalList",component:RentalListComponent,canActivate:[LoginGuard,ControlClaimGuard]},
  {path:"caradd",component:CarAddComponent,canActivate:[LoginGuard,ControlClaimGuard]},
  {path:"carupdate/:carId",component:CarUpdateComponent,canActivate:[LoginGuard,ControlClaimGuard]},
  {path:"cardetail/:carId",component:CardetailComponent},
  {path:"branddetail/:brandId",component:BrandUpdateComponent,canActivate:[LoginGuard,ControlClaimGuard]},
  {path:"colordetail/:colorId",component:ColorUpdateComponent,canActivate:[LoginGuard,ControlClaimGuard]},
  {path:"cars/searchfilter/:brandId/:colorId",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"payment/:rental",component:PaymentComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"userinfo",component:UserInfoComponent,canActivate:[LoginGuard]},
  {path:"userupdate",component:UserupdateComponent,canActivate:[LoginGuard]},
  {path:"userrental",component:UserrentalsComponent,canActivate:[LoginGuard]},
  {path:"usercompany",component:UserCompanyComponent,canActivate:[LoginGuard]}

 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
