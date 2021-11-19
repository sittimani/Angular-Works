import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Router
} from '@angular/router';
import { RegisterComponent } from 'src/app/hero/components/register/register.component';
import { AuthService } from '../shared/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    return true;
  }

  canActivateChild(): boolean {
    if (this.authService.getToken()) {
      return true;
    }
    this.router.navigate(["unauthorized"])
    return false
  }

  canDeactivate(component: RegisterComponent): boolean {
    if (!component.isSubmitted) {
      const result = confirm(`you have unsaved data: ${JSON.stringify(component.model)}, you want to continue`)
      if (result)
        return true;
      return false
    }
    return true
  }

  canLoad(): boolean {
    if (this.authService.getToken()) {
      return true
    }
    this.router.navigate(["unauthorized"])
    return false;
  }
}
