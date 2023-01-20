import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteEnum } from 'src/app/enums/routes.enum';
import { HierarchiesDetailsComponent } from './hierarchies-details/hierarchies-details.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: RouteEnum.EmptyPath, component: MainPageComponent, children: [
      { path: RouteEnum.Dashboard, component: HierarchiesDetailsComponent },
      { path: RouteEnum.NotExistRoute, redirectTo: RouteEnum.Dashboard }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HierarchiesDetailsRoutingModule { }
