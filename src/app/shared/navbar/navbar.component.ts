import {Component, Input} from '@angular/core';
import { AngularFire } from 'angularfire2';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent {
    @Input() activeUser;
    @Input() userIsActive;

    displayName: string;


    constructor(public af: AngularFire, private _router: Router) {
        this.af.auth.subscribe(user => {

            if(!user) {

            } else {
                this.activeUser = user;
                this.displayName = user.auth.displayName;
                console.log('active', this.activeUser);
            }

        })
    }

    logout() {
        console.log('logout');
        this.af.auth.logout();

        if(!this.af.auth.subscribe(auth => console.log(auth))) {
          this._router.navigate(['sign-in']);
        }
      }
}
