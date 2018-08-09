import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "../shared/event.service";



@Component({
    templateUrl: "./create-event.component.html",
    styles: [`em{float:right; color#e05c65; padding-left:10px;}
.error input {background-color:#e3c3c5;}`]
})
export class CreateEventComponent {
    isDirty: boolean = true;
    newEvent;
    constructor(private router: Router, private eventService: EventService) {

    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        console.log(formValues);
        this.router.navigate(['/events']);
        this.isDirty = false;
    }

    cancel() {
        this.isDirty=false;
        this.router.navigate(['/events']);
    }

}