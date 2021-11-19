import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/shared/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = {
    hero: '',
    power: ''
  }
  isSubmitted = false

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert(JSON.stringify(this.model))
    this.isSubmitted = true
  } 

  goToHero() {
    this.authService.removeToken()
    this.router.navigate(["hero"])
  }
}
