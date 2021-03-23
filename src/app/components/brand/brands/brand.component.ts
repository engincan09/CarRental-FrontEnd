import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import{Brand} from 'src/app/models/brand';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands : Brand[] = [];
  dataLoaded = false;
  currentBrand? : Brand;
  filterBrandText:string;

  constructor(private brandService : BrandService ) { }

  ngOnInit(): void {
    this.getBrands();

  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data,
      this.dataLoaded = true;
    });  
  }

  
  
  
 
 
  


}
