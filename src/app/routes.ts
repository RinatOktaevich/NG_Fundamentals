import { EventsListComponent } from "./events/List/events-list.component";
import { EventDetailsComponent } from "./events/event-details/Details/event-details.component";
import { Routes } from "@angular/router";
import { CreateEventComponent } from "./events/Create/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventListResolver } from "./events/event-list-resolver.service";
import { CreateSessionComponent } from "./events/event-details/Sessions/create-session.component";
import { UserModule } from "./user/Module/user.module";


export const appRoutes: Routes = [
    { path: "events/new", component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: "events/session/new", component: CreateSessionComponent },
    { path: "events", component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: "events/:id", component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: "404", component: Error404Component },
    { path: "", redirectTo: "/events", pathMatch: 'full' },
    { path: "user", loadChildren: () => UserModule }
]

