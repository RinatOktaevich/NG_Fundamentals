import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../../shared/event.model";

@Component({
    selector: 'session-list',
    templateUrl: 'sessions-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];
    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }
        if (this.sortBy) {
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);

        }

    }

    filterSessions(filter) {
        if (filter === 'All') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(x => { return x.level === filter });
        }
    }




}


function sortByNameAsc(v1: ISession, v2: ISession) {
    if (v1.name > v2.name) return 1
    else if (v1.name === v2.name) return 0
    return -1;
}

function sortByVotesDesc(v1: ISession, v2: ISession) {
    return v1.voters.length - v2.voters.length;
}