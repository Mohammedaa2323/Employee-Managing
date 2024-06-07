import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms"
import {WorkService} from "../service/work.service"

import { Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {

  emp_id : any

  isEdit : boolean = false

  constructor(private service:WorkService,private router:Router,private route:ActivatedRoute){

   

   this.emp_id = this.route.snapshot.queryParams["emp_id"] 

   if (this.emp_id){

    this.isEdit = true

    this.initilaizForm()

   }
    

  }

  initilaizForm(){

    this.service.retrieveEmployee(this.emp_id).subscribe(data=>this.employeeForm.patchValue(data))

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

    if(this.isEdit){

      this.service.updateEmployee(this.emp_id,formData).subscribe(data=>{

        this.router.navigateByUrl("")
      })

    }
    else
    this.service.createEmployee(formData).subscribe(data=>{console.log(data)}
  )

  this.router.navigateByUrl("")

  }

}
