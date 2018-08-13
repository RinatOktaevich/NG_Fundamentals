import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { IUser } from '../user/Module/user.model';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';
import { $ } from '../../../node_modules/protractor';

@Component({
  selector: 'nav-bar',
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent {
  constructor(private authService: AuthService,private eventService:EventService) {
  }

  searchTerm:string="";
  foundSessions:ISession[];

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  get currentuser(): IUser {
   return this.authService.currentUser;
  }


  searchSessions(searchTerm)
  {
    this.eventService.searchSessions(searchTerm)
    .subscribe(sessions=>
      {
        this.foundSessions=sessions;
        console.log(this.foundSessions);
      })

  }




}
