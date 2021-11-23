import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ["", [Validators.required]],
      team: ["", [Validators.required]],
      mailId: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  getField(name: string): FormControl {
    return this.employeeForm.get(name) as FormControl
  }
}
