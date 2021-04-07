import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { AddDeviceComponent } from './Components/Main/devices/add-device/add-device.component';
import { DeviceListComponent } from './Components/Main/devices/device-list/device-list.component';
import { DeviceLogListComponent } from './Components/Main/devices/device-log-list/device-log-list.component';
import { DevicesComponent } from './Components/Main/devices/devices.component';
import { AddEmployeeComponent } from './Components/Main/employee/add-employee/add-employee.component';
import { DeviceEmployeeDataComponent } from './Components/Main/Employee/device-employee-data/device-employee-data.component';
import { EmployeeListComponent } from './Components/Main/employee/employee-list/employee-list.component';
import { EmployeeComponent } from './Components/Main/employee/employee.component';
import { AddBranchComponent } from './Components/Parameters/Branch/add-branch/add-branch.component';
import { BranchListComponent } from './Components/Parameters/Branch/branch-list/branch-list.component';
import { BranchMainComponent } from './Components/Parameters/Branch/branch-main/branch-main.component';
import { EditBranchComponent } from './Components/Parameters/Branch/edit-branch/edit-branch.component';
import { AddDepartmentComponent } from './Components/Parameters/Departments/add-department/add-department.component';
import { DepartmentListComponent } from './Components/Parameters/Departments/department-list/department-list.component';
import { DepartmentMainComponent } from './Components/Parameters/Departments/department-main/department-main.component';
import { EditDepartmentComponent } from './Components/Parameters/Departments/edit-department/edit-department.component';
import { AddEmployeePositionComponent } from './Components/Parameters/EmployeePositions/add-employee-position/add-employee-position.component';
import { EditEmployeePositionComponent } from './Components/Parameters/EmployeePositions/edit-employee-position/edit-employee-position.component';
import { EmployeePositionsListComponent } from './Components/Parameters/EmployeePositions/employee-positions-list/employee-positions-list.component';
import { EmployeePositonMainComponent } from './Components/Parameters/EmployeePositions/employee-positon-main/employee-positon-main.component';
import { AuthLayoutComponent } from './Components/Shared/auth-layout/auth-layout.component';
import { LoginLayoutComponent } from './Components/Shared/login-layout/login-layout.component';
import { AuthGuard } from './Guard/Guard/auth.guard';

const routes: Routes = [
  {path:"",component:AuthLayoutComponent,children:[
  {path:"Device",component:DevicesComponent,children:[
    {path:"",component:DeviceListComponent},
    {path:"DeviceList",component:DeviceListComponent},
    {path:"AddDevice",component:AddDeviceComponent},
    {path:"DeviceLogList",component:DeviceLogListComponent}
  ],
  },
  {path:"Branch",component:BranchMainComponent,children:[
    {path:"",component:BranchListComponent},
    {path:"BranchList",component:BranchListComponent},
    {path:"AddBranch",component:AddBranchComponent},
    {path:"EditBranch/:branchID",component:EditBranchComponent}
  ],
},
  {path:"Department",component:DepartmentMainComponent,children:[
    {path:"",component:DepartmentListComponent},
    {path:"DepartmentList",component:DepartmentListComponent},
    {path:"AddDepartment",component:AddDepartmentComponent},
    {path:"EditDepartment/:departmentID",component:EditDepartmentComponent}
  ],
 },
  {path:"EmployeePositions",component:EmployeePositonMainComponent,children:[
    {path:"",component:EmployeePositionsListComponent},
    {path:"EmployeePositionsList",component:EmployeePositionsListComponent},
    {path:"AddEmployeePosition",component:AddEmployeePositionComponent},
    {path:"EditEmployeePosition/:employeePositionID",component:EditEmployeePositionComponent}
  ],
 },
  {path:"Employee",component:EmployeeComponent,children:[
    {path:"",component:EmployeeListComponent},
    {path:"AddEmployee",component:AddEmployeeComponent},
    {path:"EmployeeListDevice",component:DeviceEmployeeDataComponent}
  ]},
  ]//,  canActivate:[AuthGuard]
},
  {path:"Auth",component:LoginLayoutComponent,children:[
    {path:"Login",component:LoginComponent}
  ]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
