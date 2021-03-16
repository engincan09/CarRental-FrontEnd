import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import{Brand} from 'src/app/models/brand'

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands : Brand[] = [];
  dataLoaded = false;
  currentBrand:Brand
  constructor(private brandService : BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data,
      this.dataLoaded = true;
    });  
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand
   
  }

  

}
