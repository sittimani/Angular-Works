import { Directive } from '@angular/core';
import { FormControl, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Directive({
  selector: '[adminSelector]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: NameDirective,
    multi: true
  }]
})
export class NameDirective implements Validator {

  constructor() { 
    console.log("constructor");
    
  }

  validate(control: FormControl): Observable<ValidationErrors> | Observable<null> {
    const value = control.value
    const result = /admin/.test(value)
    console.log(result);
    
    return result ? of({"admin": {value: "admin"}}) : of(null)
  }

}
