import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbNailsComponent } from './events/event-thumbnails.comonent';
import { NavComponent } from './nav/nav.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { appRoutes } from './nav/routes';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbNailsComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent'
      , useValue: checkdirtyState
    },
    EventListResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkdirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm("What are you duing man?! Wanna go out?");

  }
  return true;
}