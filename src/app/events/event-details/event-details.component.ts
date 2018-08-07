import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../shared/event.model";

@Component({
    templateUrl: "./event-details.component.html",
    styleUrls: ["event-details.component.css"]
})
export class EventDetailsComponent implements OnInit {

    constructor(private eventService: EventService,private route:ActivatedRoute) {

    }

    event:IEvent;

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
}