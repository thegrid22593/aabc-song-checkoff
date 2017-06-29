import {Component, Input} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
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


    constructor(public af: AngularFireAuth, private _router: Router) {
        this.af.authState.subscribe(user => {

            if(user) {
              this.activeUser = user;
              this.displayName = user.displayName;
              console.log('active', this.activeUser);
            }

        });
    }

    logout() {
        console.log('logout');
        this.af.auth.signOut();

        if(!this.af.authState.subscribe(auth => console.log(auth))) {
          this._router.navigate(['sign-in']);
        }
      }
}
