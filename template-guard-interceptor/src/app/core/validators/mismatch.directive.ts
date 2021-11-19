import { Directive, Input } from '@angular/core';
import { FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appMismatch]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MismatchDirective,
    multi: true
  }]
})
export class MismatchDirective implements Validator {

  @Input('appMismatch') mismatch: string[] = []
  constructor() { }

  validate(control: FormGroup) {
    const password = control.get(this.mismatch[0])?.value
    const confirmPassword = control.get(this.mismatch[1])?.value
    if (password !== confirmPassword)
      control.get(this.mismatch[1])?.setErrors({ misMatch: { value: true } })
    return null

  }
}
