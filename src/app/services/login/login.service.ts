import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteEnum } from 'src/app/enums/routes.enum';
import { environment } from 'src/environments/environment';
import { LoginِApiResponse } from './login';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  public userLogin(userEmail: string, userPassword: string): Observable<LoginِApiResponse> {
    const formData: FormData = new FormData();
    formData.append('email', userEmail);
    formData.append('password', userPassword);
    return this.httpClient.post<LoginِApiResponse>(`${environment.api.server}/login.php`, formData);
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigateByUrl(RouteEnum.Login);
  }
}
