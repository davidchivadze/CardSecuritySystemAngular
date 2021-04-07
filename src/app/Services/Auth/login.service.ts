import { Injectable } from '@angular/core';
import { LoginModel, LoginResponseModel } from './login.service.model';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  formData:LoginModel;
  readonly rootURL="http://localhost:3000"
  constructor(private http:HttpClient,private cookie:CookieService) { }

  loginUser(formData:LoginModel):Observable<LoginResponseModel>{
    console.log(formData);
     return this.http.post<LoginResponseModel>(this.rootURL+'/api/auth/login',formData);
  }
  loggedIn(){
    
    return !!this.cookie.get('authorization');
  }
  getToken(){
    return this.cookie.get('authorization');
  }
  getUserList(){
    return this.http.get('https://localhost:44318/api/auth/GetUsers');
  }
}
