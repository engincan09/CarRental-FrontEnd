import { Component, OnInit } from '@angular/core';
import { RentalList } from 'src/app/models/rentalList';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  rentalList:RentalList[];
  filterText="";
  dataLoaded=false;
  constructor(private rentalListService:RentalService) { }

  ngOnInit(): void {
    this.getRentalList();
  }

  getRentalList(){
    this.rentalListService.getRentalList().subscribe(response=> this.rentalList = response.data)
    this.dataLoaded = true;
  }
}
