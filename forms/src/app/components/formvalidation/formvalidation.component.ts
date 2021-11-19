import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { form } from 'src/app/interface/form.interface';
import { adminName } from 'src/app/validators/admin.validators';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {

  registrationForm: FormGroup
  controllers!: form

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      firstname: ["", [Validators.required, Validators.maxLength(10)], adminName.bind(this)],
      lastname: ["", [Validators.required, Validators.minLength(1)]],
      email: ["", [Validators.required, Validators.email]]
    })
    this.controllers = {
      firstname: this.registrationForm.get("firstname"),
      lastname: this.registrationForm.get("lastname"),
      email: this.registrationForm.get("email")
    }
  }

  ngOnInit(): void {   
  }

  onSubmit() {
    console.log(this.registrationForm.get("firstname")?.errors);
    
    if(this.registrationForm.valid) 
      console.log(this.registrationForm.value);
  }

}
