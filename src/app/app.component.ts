import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Api } from './Services/SwaggerClient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public EmployeeService:Api.EmployeeService,public translate:TranslateService){
    translate.addLangs(['en','ka','ru']);
    console.log(this.getLanguage());
    translate.setDefaultLang(this.getLanguage());
  }
  ngOnInit(): void {
    // this.EmployeeService.getEmployeeList().subscribe(result=>{
    //   console.log(result);
    // })
    // this.translate.setDefaultLang('en');
  }
  title = 'ZKTecoAdmin';
  Language=this.getLanguage();
   translateWeb(lang:string) {
     localStorage.setItem('language',lang);
     this.translate.use(lang);
     this.Language=lang;
   }
   getLanguage():string{
    console.log(localStorage.getItem('language'))
     return localStorage.getItem('language')||"en";
   }
}
