import { FormControl, ValidationErrors } from '@angular/forms';

export function invalidPower(control: FormControl): ValidationErrors | null {
    const value = control.value
    if (value.length <= 3)
        return { invalidPower: { value: control.value } }
    return null
}