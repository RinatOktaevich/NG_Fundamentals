import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent {
    userName?: string;
    password?: string;
    mouseroverlogin:boolean;
    constructor(private authService: AuthService,private router:Router) {

    }

    login(formvalues) {
        this.authService.loginUser(formvalues.userName, formvalues.password);
        this.userName=formvalues.userName;
        this.password=formvalues.password;
        console.log(formvalues.userName+' '+formvalues.password);
        this.router.navigate(['events']);
    }

    cancel()
    {
        this.router.navigate(['events']);
    }
}