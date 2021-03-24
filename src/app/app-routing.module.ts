import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import{BrandComponent}from './components/brand/brands/brand.component';
import { CarComponent } from './components/car/cars/car.component';
import { CardetailComponent } from './components/car/cardetail/cardetail.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { CustomerComponent } from './components/customer/customers/customer.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent},
  {path:"customer",component:CustomerComponent},
  {path:"cars",component:CarComponent},
  {path:"brandList",component:BrandListComponent},
  {path:"colorList",component:ColorListComponent},
  {path:"rentalList",component:RentalListComponent},
  {path:"caradd",component:CarAddComponent},
  {path:"cardetail/:carId",component:CardetailComponent},
  {path:"branddetail/:brandId",component:BrandUpdateComponent},
  {path:"colordetail/:colorId",component:ColorUpdateComponent},
  {path:"cars/searchfilter/:brandId/:colorId",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"payment/:rental",component:PaymentComponent}
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
