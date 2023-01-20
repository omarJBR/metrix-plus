import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteEnum } from '../enums/routes.enum';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.isLoggedIn()) {
      return true;
    }
    this.router.navigateByUrl(RouteEnum.Login);
    return false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UnAuthGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.loginService.isLoggedIn()) {
      return true;
    }
    this.router.navigateByUrl(RouteEnum.HierarchiesDetails);
    return false;
  }
}

