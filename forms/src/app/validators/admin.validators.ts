import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";

export function adminName(control: AbstractControl): Observable<ValidationErrors> | Observable<null> {
    const value = control.value
    const result = /admin/.test(value)
    return result ? of({ "admin": {value: value} }) : of(null)
}