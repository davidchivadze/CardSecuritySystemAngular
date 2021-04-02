import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSynchronizationComponent } from './Components/Main/data-synchronization/data-synchronization.component';
import { UserManagmentComponent } from './Components/Main/user-managment/user-managment.component';
import { DevicesComponent } from './Components/Main/devices/devices.component';
import { EmployeeComponent } from './Components/Main/employee/employee.component';
import {Api, Api as APIService,} from './Services/SwaggerClient'
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AddEmployeeComponent } from './Components/Main/employee/add-employee/add-employee.component';
import { EmployeeListComponent } from './Components/Main/employee/employee-list/employee-list.component';
import {TranslateModule,TranslateLoader, TranslateService, MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NavigationComponent } from './Components/Shared/navigation/navigation.component';
import { async } from '@angular/core/testing';
import { AuthLayoutComponent } from './Components/Shared/auth-layout/auth-layout.component';
import { DeviceEmployeeDataComponent } from './Components/Main/Employee/device-employee-data/device-employee-data.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AddDeviceComponent } from './Components/Main/devices/add-device/add-device.component';
import { DeviceListComponent } from './Components/Main/devices/device-list/device-list.component';
import { BranchListComponent } from './Components/Parameters/Branch/branch-list/branch-list.component';
import { AddBranchComponent } from './Components/Parameters/Branch/add-branch/add-branch.component';
import { BranchMainComponent } from './Components/Parameters/Branch/branch-main/branch-main.component';
import { AddDepartmentComponent } from './Components/Parameters/Departments/add-department/add-department.component';
import { DepartmentListComponent } from './Components/Parameters/Departments/department-list/department-list.component';
import { DepartmentMainComponent } from './Components/Parameters/Departments/department-main/department-main.component';
export function CrateTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http);
} 
// export function translateFactory(translate:TranslateService){
//   return async () => { 
//     translate.setDefaultLang('en');
// translate.use('en');
// return new Promise(resolve => {
// translate.onLangChange.subscribe(() => {
//     resolve();
// });
// });
// };
// }
export class TranslateHandler implements MissingTranslationHandler {
  private response: String;

  handle(params: MissingTranslationHandlerParams) {
    if (params.interpolateParams) {
      return params.interpolateParams["ka"] || params.key;
    }
    return params.key;
  }
}
@NgModule({
  declarations: [
    AppComponent,
    DataSynchronizationComponent,
    UserManagmentComponent,
    DevicesComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    NavigationComponent,
    AuthLayoutComponent,
    DeviceEmployeeDataComponent,
    AddDeviceComponent,
    DeviceListComponent,
    BranchListComponent,
    AddBranchComponent,
    BranchMainComponent,
    AddDepartmentComponent,
    DepartmentListComponent,
    DepartmentMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:CrateTranslateLoader,
        deps:[HttpClient]
      },
    })
  ],
  providers: [
    Api.EmployeeService,
    Api.ParametersService,
    Api.RemoteDeviceService,
    {provide:APIService.API_BASE_URL, useValue:"https://localhost:44376"},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
