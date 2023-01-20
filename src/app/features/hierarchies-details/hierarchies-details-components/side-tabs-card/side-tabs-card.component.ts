import { Component } from '@angular/core';

@Component({
  selector: 'app-side-tabs-card',
  templateUrl: './side-tabs-card.component.html',
  styleUrls: ['./side-tabs-card.component.scss']
})

export class SideTabsCardComponent {

  public isSubordinatesClick = false;
  public sideTabs = [
    { name: 'Hierarchy info', href: '#infotab' },
    { name: 'User defined', href: '#user' },
    { name: 'Responsibilities', href: '#responsibilities' },
    { name: 'Subordinates', href: '#subordinates' },
    { name: 'Linked Objects', href: '#profile' },
    { name: 'Linked KPI\'s', href: '#home' },
  ];
  public activeTab: string = 'Hierarchy info';

  constructor() {
    const jsSource = document.createElement("script");
    jsSource.src = "../../../../assets/js/highchart.js";
    document.body.appendChild(jsSource);
  }
}
