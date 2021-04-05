import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-company',
  templateUrl: './user-company.component.html',
  styleUrls: ['./user-company.component.css']
})
export class UserCompanyComponent implements OnInit {

  customer:Customer;
  constructor(
    private userService:UserService,
    private customerService:CustomerService,
    private session:SessionStorageService) { }
 
  
  ngOnInit(): void {
    
   this.getCustomer();

  }

  getCustomer(){
    let userId = this.session.getUser("userId");
    this.customerService.getCustomerByUserId(userId).subscribe(response=> {
      this.customer = response.data});
    console.log(this.customer)
  }

}
