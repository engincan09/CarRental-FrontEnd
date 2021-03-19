import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: Car[], filterText: string): Car[] {
     filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.filter((p:Car)=>p.brandName.toLocaleLowerCase().indexOf(filterText)!==-1 ||
     p.colorName.toLocaleLowerCase().indexOf(filterText)!==-1 || p.description.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
