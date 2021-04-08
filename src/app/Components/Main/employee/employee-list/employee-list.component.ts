import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  EmployeeList:Api.GetEmployeeListItem[]
  RecordLength:number
  constructor(private EmployeeService:Api.EmployeeService,private DeviceService:Api.RemoteDeviceService) { }

  ngOnInit(): void {
    this.RecordLength=0;
    this.EmployeeService.getEmployeeList().subscribe(res=>{
       if(res.ok){
         this.EmployeeList=res.data.getEmployeeList
         this.RecordLength=res.data.getEmployeeList.length
       }else{
         console.log(res.ok);
       }
    })
  }
  SyncUserToDevice(employeeID:number){
      this.DeviceService.insertUserToDevice(employeeID).subscribe(res=>{
        if(res.ok){
          this.EmployeeList.find(e=>e.iD==employeeID).userIDInDevice=15;
        }else{
          console.log(res.errors);
        }
      })
  }

}
