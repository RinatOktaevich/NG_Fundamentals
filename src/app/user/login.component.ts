import { Component } from "../../../node_modules/@angular/core";

@Component({
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent {
    userName: string;
    password: string;

    login(formvalues:string) {
        console.log(formvalues);
    }
}