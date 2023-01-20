import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {
  constructor() {
    const jsSource = document.createElement("script");
    jsSource.src = "../../../../assets/js/script.js";
    document.body.appendChild(jsSource);
  }
}
