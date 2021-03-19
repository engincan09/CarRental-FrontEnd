import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  brands:Brand[]=[];
  colors:Color[]=[];
  currentBrand:number;
  currentColor:number;
  constructor(private brandService:BrandService,private colorService:ColorService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }
  //Brand
  getBrands(){
    this.brandService.getBrands().subscribe(response=> {this.brands = response.data});
  }

  isCurrentBrand(brand:Brand){
    if(brand.id === this.currentBrand){
      return true;
    }else{
      return false;
    }
  }

  //Color
  getColors(){
    this.colorService.getColors().subscribe(response=> {this.colors = response.data});
  }
  isCurrentColor(color:Color){
    if(color.id === this.currentColor){
      return true
    }else{
      return false;
    }
  }


}
