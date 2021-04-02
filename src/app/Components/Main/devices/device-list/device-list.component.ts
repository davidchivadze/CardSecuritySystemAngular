import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  constructor(public RemoteDeviceComponent:Api.RemoteDeviceService) { }
  RemoteDeviceList:Api.GetDeviceListItem[]
  ngOnInit(): void {
    this.RemoteDeviceComponent.getDeviceList().subscribe(res=>{
      if(res.ok){
      this.RemoteDeviceList=res.data.deviceList;
      }else{
        console.log(res.errors);
      }
    })
  }

}
