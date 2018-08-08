import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { IUser } from '../user/user.model';

@Component({
  selector: 'nav-bar',
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent {
  constructor(private authService: AuthService) {

  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  get currentuser(): IUser {
   return this.authService.currentUser;
  }


}
