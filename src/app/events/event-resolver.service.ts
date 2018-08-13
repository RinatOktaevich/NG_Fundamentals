import { Resolve, ActivatedRouteSnapshot } from "../../../node_modules/@angular/router";
import { Injectable } from "../../../node_modules/@angular/core";
import { EventService } from "./shared/event.service";


@Injectable()
export class EventResolver implements Resolve<any>
{
constructor(private eventService:EventService){}

    resolve(route:ActivatedRouteSnapshot){
        return this.eventService.getEvent(route.params["id"]);
    }
}