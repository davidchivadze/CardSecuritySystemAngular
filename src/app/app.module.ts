import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSynchronizationComponent } from './Components/Main/data-synchronization/data-synchronization.component';
import { UserManagmentComponent } from './Components/Main/user-managment/user-managment.component';
import { DevicesComponent } from './Components/Main/devices/devices.component';
import { EmployeeComponent } from './Components/Main/employee/employee.component';
import {Api, Api as APIService,} from './Services/SwaggerClient'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DataSynchronizationComponent,
    UserManagmentComponent,
    DevicesComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    Api.EmployeeService,
    {provide:APIService.API_BASE_URL, useValue:"https://localhost:44376"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
