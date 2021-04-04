import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  GenderList:Api.IGetGenderListItem[]
  DepartmentList:Api.GetDepartmentsListItem[]
  BranchList:Api.GetBranchListItem[]
  PositionList:Api.IGetEmployeePositionsListItem[]
  FineTypeList:Api.GetFineTypeListItem[]
  ForgivenessTypeList:Api.GetForgivenessTypeListItem[]
  SalaryTypeList:Api.GetSalaryTypeListItem[]
  AddEmployee:Api.AddEmployeeRequestModel
  HolidayTypes:Api.GetHolidayTypeListItem[]
  HolidaysArray:number[]
  standartSchedule:boolean
  constructor(public ParameterService:Api.ParametersService,public addEmployeService:Api.EmployeeService) { }

  ngOnInit(): void {
      this.AddEmployee=new Api.AddEmployeeRequestModel();
      this.AddEmployee.forgiveness=new Api.Forgiveness();
      this.AddEmployee.fine=new Api.Fine();
      this.AddEmployee.salary=new Api.SalaryData();
      this.AddEmployee.schedule=new Api.ScheduleData();
      this.AddEmployee.employeeHolidays=new Array<Api.EmployeeHolidays>();
      var firsArrayObj=new Api.EmployeeHolidays();
      firsArrayObj.holidayTypeID=0;
      this.AddEmployee.employeeHolidays.push(firsArrayObj);
      this.standartSchedule=true;
    this.ParameterService.getGenderList().subscribe(res=>{
       if(res.ok){
         this.GenderList=res.data.genderList;
       }else{
         console.log(res);
       }
    })
    this.ParameterService.getHolidayTypeList().subscribe(res=>{
      if(res.ok){
        this.HolidayTypes=res.data.holidayTypes
      }else{
        console.log(res.errors);
      }
    })
    this.ParameterService.getDepartmentsList().subscribe(res=>{
      if(res.ok){
        this.DepartmentList=res.data.departmentsList;
      }else{
        console.log(res);
      }
   })
   this.ParameterService.getSalaryTypesList().subscribe(res=>{
     if(res.ok){
       this.SalaryTypeList=res.data.salaryTypes
      }else{
        console.log(res);
      }
   })
   this.ParameterService.getForgivenessTypesLIst().subscribe(res=>{
     if(res.ok){
       this.ForgivenessTypeList=res.data.forgivenessTypes
     }else{
      console.log(res);
    }
   })
   
   this.ParameterService.getFineTypesLIst().subscribe(res=>{
    if(res.ok){
      this.FineTypeList=res.data.fineTypes
    }else{
      console.log(res);
    }
  })
   this.ParameterService.getBranchList().subscribe(res=>{
    if(res.ok){
      this.BranchList=res.data.branchList;
    }else{
      console.log(res);
    }
    this.ParameterService.getEmployeePositionsList().subscribe(res=>{
      if(res.ok){
        this.PositionList=res.data.getEmployeePositionsList
      }else{
        console.log(res);
      }
    })
 })
  }
  addHolidayType(){
    let newEmplyeeHoliday=new Api.EmployeeHolidays();
    this.AddEmployee.employeeHolidays.push(newEmplyeeHoliday);
  }
  changeScheduleType(){
    this.standartSchedule=!this.standartSchedule;
    console.log(this.standartSchedule);
  }
  addEmployeeSubmit(){
    console.log(this.AddEmployee);
  }
}
