import { Component } from '@angular/core';
import {WorkService} from "../service/work.service"
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employee:any

  constructor(private service:WorkService){
    this.service.getEmployee().subscribe(data=>this.employee=data)
  }


}
