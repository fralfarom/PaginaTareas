import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // const headers = new HttpHeaders({
    //   'toke-usuario': 'ALKJASDKJA90328SLJK'
    // });
    // const reqClone = req.clone({
    //   headers
    // });
    // return next.handle(reqClone);

    return next.handle(req).pipe(catchError(this.manejarError));
  }

  manejarError(err: HttpErrorResponse) {
    console.warn(err);
    return throwError(`añlsdksakñld: ${err}`);
  }

}
