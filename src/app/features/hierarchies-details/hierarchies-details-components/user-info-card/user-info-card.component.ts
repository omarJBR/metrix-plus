import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss']
})

export class UserInfoCardComponent {
  constructor(
    public userService: LoginService
  ) { }
}
