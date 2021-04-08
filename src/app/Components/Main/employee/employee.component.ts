import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private DeviceService:Api.RemoteDeviceService) { }

  ngOnInit(): void {
  }
  SyncDeviceData(){
    this.DeviceService.syncUserLog().subscribe(res=>{
      
    });
  }

}
