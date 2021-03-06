import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule}from '@angular/forms';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/cars/car.component';
import { BrandComponent } from './components/brand/brands/brand.component';
import { ColorComponent } from './components/color/colors/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { CardetailComponent } from './components/car/cardetail/cardetail.component';
import { SearchComponent } from './components/search/search.component';
import { FileUploadModule } from 'ng2-file-upload';



import { CarFilterPipe } from './pipes/car-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { RentListFilterPipe } from './pipes/rent-list-filter.pipe';
import { HomeComponent } from './components/home/home.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { CarImageAddComponent } from './components/car/car-image-add/car-image-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { UserupdateComponent } from './components/user/userupdate/userupdate.component';
import { UsertabmenuComponent } from './components/user/usertabmenu/usertabmenu.component';
import { UserrentalsComponent } from './components/user/userrentals/userrentals.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { UserCompanyComponent } from './components/user/user-company/user-company.component';
import { UserCompanyUpdateComponent } from './components/user/user-company-update/user-company-update.component';






@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    RentalComponent,
    CardetailComponent,
    CarFilterPipe,
    BrandFilterPipe,
    ColorFilterPipe,
    SearchComponent,
    PaymentComponent,
    RentalListComponent,
    RentListFilterPipe,
    HomeComponent,
    CarAddComponent,
    BrandAddComponent,
    BrandListComponent,
    ColorAddComponent,
    ColorListComponent,
    ColorUpdateComponent,
    BrandUpdateComponent,
    CarImageAddComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    UserInfoComponent,
    UserupdateComponent,
    UsertabmenuComponent,
    UserrentalsComponent,
    CarUpdateComponent,
    UserCompanyComponent,
    UserCompanyUpdateComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule,
    MdbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
