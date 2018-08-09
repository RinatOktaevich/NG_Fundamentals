import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/List/events-list.component';
import { EventsThumbNailsComponent } from './events/ThumbNails/event-thumbnails.comonent';
import { NavComponent } from './nav/nav.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/Details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/Create/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';
import { AuthService } from './user/auth.service';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/Sessions/create-session.component';
import { SessionListComponent } from './events/event-details/Sessions/sessions-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbNailsComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent'
      , useValue: checkdirtyState
    },
    AuthService,
    EventListResolver,
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