import { AbstractControl, ValidationErrors } from "@angular/forms";

export function InvalidName(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const regex = /admin/
    const result = regex.test(value)
    return result ? { invalidName: { value: value } } : null
}