import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: "event-thumbnails",
    templateUrl: "./event-thumbnails.component.html",
    styleUrls:["./event-thumbnails.component.css"]
})

export class EventsThumbNailsComponent {
    @Input() events: any;
    @Output() eventClick=new EventEmitter();
    num: number = 7;


   



} 