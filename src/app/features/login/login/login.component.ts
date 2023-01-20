import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { RouteEnum } from 'src/app/enums/routes.enum';
import { LoginِApiResponse } from 'src/app/services/login/login';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public loginForm: FormGroup;
  public invalidCreds: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private ngxService: NgxUiLoaderService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public login(): void {
    this.ngxService.start();
    this.invalidCreds = false;
    const formData = this.loginForm.value;
    this.loginService.userLogin(formData.email, formData.password).subscribe({
      next: (res: LoginِApiResponse) => {
        this.invalidCreds = res.code === -2 ? true : false;
        if (res.code === 1) {
          localStorage.setItem('accessToken', res.data.accessToken);
          this.router.navigateByUrl(RouteEnum.HierarchiesDetails);
        }
        this.ngxService.stop();
      },
      error: (err) => {
        console.log(err.message);
        this.ngxService.stop();
      }
    });
  }
}
