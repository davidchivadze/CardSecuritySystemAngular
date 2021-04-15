import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  IsRunning:boolean
  constructor(private DeviceService:Api.RemoteDeviceService) { }
  
  ngOnInit(): void {
    this.DeviceService.syncIsRunning().subscribe(res=>{
      console.log(res);
      if(res.ok){
        this.IsRunning=res.data
      }else{
        this.IsRunning=false;
      }
    });
  }
  SyncDeviceData(){
    this.DeviceService.syncUserLog().subscribe(res=>{
      this.IsRunning=false;
    });
    this.IsRunning=true;
  }

}
