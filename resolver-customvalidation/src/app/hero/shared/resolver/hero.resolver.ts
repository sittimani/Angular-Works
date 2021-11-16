import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { HeroService } from '../service/hero.service';

@Injectable({
  providedIn: 'root'
})

export class HeroResolver implements Resolve<boolean> {

  constructor(private heroService: HeroService) {}

  resolve(): Observable<any> {
    return this.heroService.allHeros()
  }
}
