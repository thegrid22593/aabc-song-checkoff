<<<<<<< HEAD
import {Component, Input} from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 00c402289e8e5261cfc12d5168c4590b698ca613
import { AngularFire } from 'angularfire2';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
<<<<<<< HEAD
    selector: 'nav-bar',
    template: require('./navbar.html')
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
=======
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public activeUser;
  public userIsActive;

  public displayName: string;

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

>>>>>>> 00c402289e8e5261cfc12d5168c4590b698ca613
}
