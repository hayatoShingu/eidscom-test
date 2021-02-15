import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { SpinnerServiceService } from './spinner-service.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()

export class InterceptorServiceService implements HttpInterceptor {

  constructor(private spinner: SpinnerServiceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let doIntercept = request.headers.get("X-Intercept");

    if (doIntercept == 'true') this.spinner.show();
    return next.handle(request).pipe(tap(
      event => {
        if (event instanceof HttpResponse && doIntercept == 'true') {
          this.spinner.hide();
        }
      },
      error => {
        if (error instanceof HttpErrorResponse && doIntercept == 'true') {
          console.log(error);
          this.spinner.show();
        }
      }
    ))

  }
}