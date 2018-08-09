import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IEvent } from "../shared/event.model";


@Component({
    selector: "event-thumbnails",
    templateUrl: "./event-thumbnails.component.html",
    styleUrls: ["./event-thumbnails.component.css"]
})

export class EventsThumbNailsComponent {
    @Input() event: IEvent;
    @Output() eventClick = new EventEmitter();
    num: number = 7;

    getStartClass() {
        if (this.event && this.event.time === '8:00 am') {
            return 'green bold';
        }
    }


    getLocationColor()
    {
        if(this.event&& this.event.location.country==="Netherlands" )
        {
            return {color:"#f2103e",'font-weight':'bold'};
        }
    }


} 