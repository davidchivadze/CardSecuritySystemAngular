import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/Services/Auth/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService:LoginService,
    private router:Router
    ){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if(this.loginService.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/Login'])
      return false
    }
  }
}
