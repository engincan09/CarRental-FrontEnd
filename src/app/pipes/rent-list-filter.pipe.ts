import { Pipe, PipeTransform } from '@angular/core';
import { RentalList } from '../models/rentalList';

@Pipe({
  name: 'rentListFilter'
})
export class RentListFilterPipe implements PipeTransform {

  transform(value: RentalList[], filterText:string): RentalList[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.filter((p:RentalList)=>p.carName.toLocaleLowerCase().indexOf(filterText)!==-1 || 
    p.customerFirstName.toLocaleLowerCase().indexOf(filterText)!==-1 ||
    p.customerLastName.toLocaleLowerCase().indexOf(filterText)!==-1): value
  }

}
