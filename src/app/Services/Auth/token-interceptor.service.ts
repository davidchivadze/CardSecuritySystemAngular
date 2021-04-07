import { Injectable,Injector } from '@angular/core';
import { HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse} from '@angular/common/http'
import {LoginService} from './login.service'
import {Router} from '@angular/router';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
 constructor(private injector:Injector,private router:Router){}

  intercept(req, next) {
    let loginService=this.injector.get(LoginService);
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization:"Bearer "+`${loginService.getToken()}`
      }
    })
    return next.handle(tokenizedReq).pipe(catchError((err: any) => {
      if(err.status===401){
  
        return this.router.navigate(['/Login']);
      }
  }))
  }


}
