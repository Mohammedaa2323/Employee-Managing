import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDetaileComponent } from './employee-detaile/employee-detaile.component';

const routes: Routes = [
    
    {path:"emp/add",component:EmployeeCreateComponent},

    {path:"emp/:id",component:EmployeeDetaileComponent},

    {path:"",component:EmployeeListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
