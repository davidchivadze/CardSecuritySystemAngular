import { Component, OnInit } from '@angular/core';
import { Api } from './Services/SwaggerClient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public EmployeeService:Api.EmployeeService){

  }
  ngOnInit(): void {
    this.EmployeeService.getEmployeeList().subscribe(result=>{
      console.log(result);
    })
  }
  title = 'ZKTecoAdmin';
}
