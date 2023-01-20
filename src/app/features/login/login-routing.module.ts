import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteEnum } from 'src/app/enums/routes.enum';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: RouteEnum.EmptyPath, component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule { }
