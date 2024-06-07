import { Component } from '@angular/core';

import { WorkService } from '../service/work.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-detaile',
  templateUrl: './employee-detaile.component.html',
  styleUrls: ['./employee-detaile.component.css']
})
export class EmployeeDetaileComponent {

  id:any

  employee:any

  constructor(private route:ActivatedRoute,private service:WorkService){

    this.id=this.route.snapshot.params["id"]

    this.service.retrieveEmployee(this.id).subscribe(data=>this.employee=data)
  }

}
