import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddDeviceComponent } from './Components/Main/devices/add-device/add-device.component';
import { DeviceListComponent } from './Components/Main/devices/device-list/device-list.component';
import { DevicesComponent } from './Components/Main/devices/devices.component';
import { AddEmployeeComponent } from './Components/Main/employee/add-employee/add-employee.component';
import { DeviceEmployeeDataComponent } from './Components/Main/Employee/device-employee-data/device-employee-data.component';
import { EmployeeListComponent } from './Components/Main/employee/employee-list/employee-list.component';
import { EmployeeComponent } from './Components/Main/employee/employee.component';
import { AddBranchComponent } from './Components/Parameters/Branch/add-branch/add-branch.component';
import { BranchListComponent } from './Components/Parameters/Branch/branch-list/branch-list.component';
import { BranchMainComponent } from './Components/Parameters/Branch/branch-main/branch-main.component';
import { AddDepartmentComponent } from './Components/Parameters/Departments/add-department/add-department.component';
import { DepartmentListComponent } from './Components/Parameters/Departments/department-list/department-list.component';
import { DepartmentMainComponent } from './Components/Parameters/Departments/department-main/department-main.component';

const routes: Routes = [
  
  {path:"Device",component:DevicesComponent,children:[
    {path:"",component:DeviceListComponent},
    {path:"DeviceList",component:DeviceListComponent},
    {path:"AddDevice",component:AddDeviceComponent}
  ]},
  {path:"Branch",component:BranchMainComponent,children:[
    {path:"",component:BranchListComponent},
    {path:"BranchList",component:BranchListComponent},
    {path:"AddBranch",component:AddBranchComponent}
  ]},
  {path:"Department",component:DepartmentMainComponent,children:[
    {path:"",component:DepartmentListComponent},
    {path:"DepartmentList",component:DepartmentListComponent},
    {path:"AddDepartment",component:AddDepartmentComponent}
  ]},
  {path:"Employee",component:EmployeeComponent,children:[
    {path:"",component:EmployeeListComponent},
    {path:"AddEmployee",component:AddEmployeeComponent},
    {path:"EmployeeListDevice",component:DeviceEmployeeDataComponent}
  ]},
  {path:"",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
