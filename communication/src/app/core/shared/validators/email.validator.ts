import { AbstractControl, ValidationErrors } from "@angular/forms";

export function EmailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const result = regex.test(value)
    return !result ? { invalidEmail: { value: value } } : null
}