import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: "123"
      }
    })
    return next.handle(modifiedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        this.router.navigate(["internal-server-error"])
        return throwError(error)
      }),
      finalize(() => { 
        console.log(`request for ${request.url} is resolved at ${new Date()}`);
      })
    );
  }
}
