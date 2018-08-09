import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession } from "../../shared/event.model";

@Component({
    selector:'create-session',
    templateUrl: './create-session.component.html',
    styles: [`em{float:right; color#e05c65; padding-left:10px;}
    input.error ,select.error ,textarea.error  {background-color:#e3c3c5;}`]
})
export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession=new EventEmitter();
    newSessionForm: FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl

    ngOnInit() {
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(40), this.restrictedWords(['foo', 'bar', 'fl is a poo'])])

        this.newSessionForm = new FormGroup({
            id:undefined,
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    private restrictedWords(words) {
       return (control: FormControl): { [key: string]: any }=> {
            if(!words)return null;

            var invalidWords=words
            .map(w=>control.value.includes(w)?w:null)
            .filter(w=>w!=null)

            return invalidWords && invalidWords.length>0 ? { 'restrictedWords': invalidWords.join() } : null
        }
    }

    saveSession(formvalues) {
        let session:ISession={
            id:undefined,
            name:formvalues.name,
            duration:+formvalues.duration,
            level:formvalues.level,
            presenter:formvalues.presenter,
            abstract:formvalues.abstract,
            voters:[]
        }




        this.saveNewSession.emit(session)


        console.log(formvalues);
    }
}