import { Component } from "@angular/core";
import { Router } from "@angular/router";



@Component({
    template:`<h1>wfkwl;k</h1>`,
    styles: [`em{float:right; color#e05c65; padding-left:10px;}
.error input {background-color:#e3c3c5;}`]
})
export class CreateEventComponent {
    isDirty: boolean = false;
    newEvent;
    newevent2;
    constructor(private router: Router) {

    }

    saveEvent(formValues) {
        console.log(formValues);
    }

    cancel() {
        this.router.navigate(['/events']);
    }

}