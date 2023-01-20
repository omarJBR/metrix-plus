import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HierarchiesDetailsRoutingModule } from './hierarchies-details-routing.module';
import { HierarchiesDetailsComponent } from './hierarchies-details/hierarchies-details.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserInfoCardComponent } from './hierarchies-details-components/user-info-card/user-info-card.component';
import { MenuCardComponent } from './hierarchies-details-components/menu-card/menu-card.component';
import { BreadcrumbComponent } from './hierarchies-details-components/breadcrumb/breadcrumb.component';
import { StatisticsDataComponent } from './hierarchies-details-components/statistics-data/statistics-data.component';
import { SideTabsCardComponent } from './hierarchies-details-components/side-tabs-card/side-tabs-card.component';
import { HierarchyInfoComponent } from './hierarchies-details-components/side-tabs-card-components/hierarchy-info/hierarchy-info.component';
import { LinkedKpiComponent } from './hierarchies-details-components/side-tabs-card-components/linked-kpi/linked-kpi.component';
import { LinkedObjectsComponent } from './hierarchies-details-components/side-tabs-card-components/linked-objects/linked-objects.component';
import { ResponsibilitiesComponent } from './hierarchies-details-components/side-tabs-card-components/responsibilities/responsibilities.component';
import { SubordinatesComponent } from './hierarchies-details-components/side-tabs-card-components/subordinates/subordinates.component';
import { UserDefinedComponent } from './hierarchies-details-components/side-tabs-card-components/user-defined/user-defined.component';

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    HierarchiesDetailsComponent,
    UserInfoCardComponent,
    MenuCardComponent,
    BreadcrumbComponent,
    StatisticsDataComponent,
    SideTabsCardComponent,
    HierarchyInfoComponent,
    UserDefinedComponent,
    ResponsibilitiesComponent,
    SubordinatesComponent,
    LinkedObjectsComponent,
    LinkedKpiComponent
  ],
  imports: [
    CommonModule,
    HierarchiesDetailsRoutingModule
  ]
})

export class HierarchiesDetailsModule { }
