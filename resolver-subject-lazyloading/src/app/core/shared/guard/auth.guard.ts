import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  canActivate(): boolean {
    console.log("parent guard");  
    return true;
  }

  canActivateChild(): boolean {
    console.log("child guard");
    return true;
  }

}
