import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { form } from 'src/app/interface/form.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  reactiveForm!: FormGroup
  addressForm!: FormGroup
  control: form;

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      firstname: ["", []],
      lastname: [""],
      email: ["", Validators.required],
      optionalemail: new FormArray([])
    })

    this.addressForm = this.formBuilder.group({
      address: this.formBuilder.array([])
    })

    this.control = {
      firstname: this.reactiveForm.get("firstname"),
      lastname: this.reactiveForm.get("lastname"),
      email: this.reactiveForm.get("email")
    }

    this.detectChanges()
  }

  get optionalEmailControl() {
    return (<FormArray>this.reactiveForm.get('optionalemail')).controls
  }

  optionalEmail() {
    return this.reactiveForm.get("optionalemail") as FormArray
  }

  removeEmail(index: number) {
    this.optionalEmail().removeAt(index)
  }

  addEmail() {
    const emails: FormArray = <FormArray>this.reactiveForm.get("optionalemail")
    emails.push(new FormControl("", Validators.required))
  }

  detectChanges() {
    // this.control.firstname?.valueChanges.subscribe((value: string) => {
    //   //this.control.firstname?.reset("", { emitEvent: false })
    //   console.log(value);
    // })
  }

  onSubmit() {
    if (this.reactiveForm.valid)
      console.log(this.reactiveForm.value);
  }

  address(): FormArray {
    return this.addressForm.get("address") as FormArray
  }

  newAddress(): FormGroup {
    return this.formBuilder.group({
      city: '',
      state: '',
    })
  }

  formSubmit() {
    console.log(this.addressForm.value);
  }

  addAddress() {
    this.address().push(this.newAddress());
  }

  removeAddress(index: number) {
    this.address().removeAt(index)
  }

}
