import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './Components/Main/employee/add-employee/add-employee.component';
import { EmployeeListComponent } from './Components/Main/employee/employee-list/employee-list.component';
import { EmployeeComponent } from './Components/Main/employee/employee.component';

const routes: Routes = [
  {path:"Employee",component:EmployeeComponent,children:[
    {path:"",component:EmployeeListComponent},
    {path:"AddEmployee",component:AddEmployeeComponent},
  ]},

  {path:"",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
