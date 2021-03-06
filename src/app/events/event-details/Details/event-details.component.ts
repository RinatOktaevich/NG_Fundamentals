import { Component, OnInit } from "@angular/core";
import { EventService } from "../../shared/event.service";
import { ActivatedRoute, Params } from "@angular/router";
import { IEvent, ISession } from "../../shared/event.model";

@Component({
    templateUrl: "./event-details.component.html",
    styleUrls: ["event-details.component.css"]
})
export class EventDetailsComponent implements OnInit {
    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    addmode: boolean;
    event: IEvent;
    filterby: string = "All";
    sortby: string = "name";

    ngOnInit() {
        this.route.data.forEach((data) => {
            this.event = data['event'];
            this.addmode = false;
        });
    }

    addSession() {
        this.addmode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;

        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addmode = false;
    }

    cancelNewSession() {
        this.addmode = false;
    }




}