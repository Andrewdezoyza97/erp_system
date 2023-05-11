import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate {
  constructor(private router:Router){}

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem('logindata')){
      return true;
    }else{
      this.router.navigate(["/"])
      alert("You can't access to this page without login")
      return false;
    }
      
  }


}


