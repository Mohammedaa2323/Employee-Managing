import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms"
import {WorkService} from "../service/work.service"

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {

  constructor(private service:WorkService){

  }

  employeeForm=new FormGroup(
    {
      name:new FormControl("",Validators.required),
      dept:new FormControl("",Validators.required),
      phone:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      salary:new FormControl("",Validators.required),
    }
  )

  handleSubmit(){
    let formData=this.employeeForm.value
    this.service.createEmployee(formData).subscribe(data=>{console.log(data)}
    )
  }

}
