import { Component, Input, ViewChild, ElementRef, Inject } from "../../../node_modules/@angular/core";
import { JQ_TOKEN } from "./jQuery.service";


@Component({
    selector: "simple-modal",
    templateUrl: "./simpleModal.component.html",
    styleUrls: ["./simpleModal.component.css"]
})
export class SimpleModalComponent {
    @Input() title: string;
    @ViewChild('modalcontainer') containerEl: ElementRef;
    @Input() closeOnBodyClick: string;

    constructor(@Inject(JQ_TOKEN) private $: any) {

    }


    closeModal() {
        if (this.closeOnBodyClick === "true")
            this.$(this.containerEl.nativeElement).modal('hide');
    }
}