import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, UnAuthGuard } from './authguard/auth.guard';
import { RouteEnum } from './enums/routes.enum';

const routes: Routes = [
  { path: RouteEnum.EmptyPath, pathMatch: 'full', redirectTo: RouteEnum.HierarchiesDetails },
  { path: RouteEnum.Login, loadChildren: () => import('./features/login/login.module').then((m) => m.LoginModule), canActivate: [UnAuthGuard] },
  { path: RouteEnum.HierarchiesDetails, loadChildren: () => import('./features/hierarchies-details/hierarchies-details.module').then((m) => m.HierarchiesDetailsModule), canActivate: [AuthGuard] },
  { path: RouteEnum.NotExistRoute, redirectTo: RouteEnum.HierarchiesDetails }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
