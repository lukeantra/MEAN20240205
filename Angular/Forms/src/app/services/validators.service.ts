import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { debounceTime, delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  private url = 'http://localhost:4231/auth/check-email';
  constructor(private http: HttpClient) {}

  minLen(limitednum: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length < limitednum) {
        return { minlen: true, limitednum };
      }
      return null;
    };
  }

  matchPwd(group: FormGroup): ValidationErrors | null {
    const pwdval = group.get('password')?.value;
    const cfmval = group.get('confirm')?.value;

    console.log(pwdval, cfmval);
    if (pwdval === cfmval) {
      return null;
    }
    return { pwdNoMatch: true };
  }

  checkEmail = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    const val = control.value;

    return this.http.post<boolean>(this.url, { email: val }).pipe(
      delay(500),
      map((data: boolean) => {
        if (data) {
          return { hasemail: true };
        }
        return null;
      })
    );
  };
}
