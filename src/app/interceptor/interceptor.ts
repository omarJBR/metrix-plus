import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';

@Injectable()

export class Interceptor implements HttpInterceptor {

  constructor(
    private loginService: LoginService
  ) { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = httpRequest.clone({
      setHeaders: this.loginService.isLoggedIn() ? {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      } : {}
    });
    return next.handle(request)
  }
}
