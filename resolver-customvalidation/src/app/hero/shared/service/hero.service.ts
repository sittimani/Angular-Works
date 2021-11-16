import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverAddress } from 'src/environments/environment.prod';
import { Hero } from '../interface/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  saveHero(data: Hero) {
    return this.http.post(`${serverAddress}save-hero`, data)
  }

  allHeros() {
    return this.http.get<Hero[]>(`${serverAddress}hero-list`)
  }

}
