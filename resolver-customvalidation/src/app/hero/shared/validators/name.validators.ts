import { FormControl, ValidationErrors } from '@angular/forms';

export function invalidName(control: FormControl): ValidationErrors | null {
    const name = control.value;
    const result = /admin/.test(name)
    return result ? { invalidName: { value: control.value } } : null
}