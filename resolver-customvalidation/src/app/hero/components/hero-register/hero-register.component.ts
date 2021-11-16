import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../../shared/service/hero.service';
import { invalidName } from '../../shared/validators/name.validators';
import { invalidPower } from '../../shared/validators/power.validators';

@Component({
  selector: 'app-hero-register',
  templateUrl: './hero-register.component.html',
  styleUrls: ['./hero-register.component.css']
})
export class HeroRegisterComponent {

  register: FormGroup

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private heroService: HeroService
  ) {
    this.register = this.formBuilder.group({
      name: ["", [Validators.required, invalidName]],
      power: ["", [Validators.required, invalidPower]]
    });
  }

  saveHero() {
    if (this.register.valid)
      this.heroService.saveHero(this.register.value).subscribe(result => {
        this.router.navigate([""])
      })
  }

  getControl(name: string): FormControl {
    return this.register.get(name) as FormControl;
  }

  showHeroList() {
    this.router.navigate([""])
  }

}
