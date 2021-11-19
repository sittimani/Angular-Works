import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  addToken() {
    localStorage.setItem("token", "123")
  }

  removeToken() {
    localStorage.clear()
  }

  getToken() {
    return localStorage.getItem("token")
  }
}
