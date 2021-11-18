import { AbstractControl } from "@angular/forms";

export interface form {
    firstname: AbstractControl | null,
    lastname: AbstractControl | null,
    email: AbstractControl | null
}