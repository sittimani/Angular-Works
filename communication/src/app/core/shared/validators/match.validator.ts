import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function misMatchValidator(firstControl: string, secondControl: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const mailId = control.get(firstControl)
        const secondMailId = control.get(secondControl)
        return mailId?.value === secondMailId?.value ? null : setError(secondMailId, secondMailId?.value)
    }
}

function setError(control: AbstractControl | null, value: string) {
    control?.setErrors({ misMatch: { value: value } })
    return null
}