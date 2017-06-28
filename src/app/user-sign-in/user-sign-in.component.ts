import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Validators } from '@angular/forms';
import {AngularFire, FirebaseListObservable, FirebaseAuthState} from 'angularfire2';
import {UserService} from "../services/user.service";
import {SongService} from "../services/songs.service";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/fromPromise';

@Component({
  selector: 'user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.scss']
})

export class UserSignInComponent implements OnInit {

    public response: string;
    public logoIcon: string;
    public backgroundImage: string;
    public email: string;
    public password: string;
    public activeUser: any;

    private emailAlreadyInUse: boolean;

    // State Variables
    public logInIsActive: boolean = true;
    public signUpIsActive: boolean = false;

    // Sign In
    signInEmail: string;
    signInPassword: string;

    constructor(private _songsService: SongService, private _router: Router, public af: AngularFire) {
        this.backgroundImage = './assets/images/main-bg.jpg';
        this.logoIcon = './assets/images/logo-icon.png';
    }

    ngOnInit() {

    }

    login() {
      console.log('login');
      this.af.auth.login({ email: this.signInEmail, password: this.signInPassword }).then(success => {
        this.af.auth.subscribe(user => {
          if(!user) {
            alert('Please Log In!');
          } else {
            this.activeUser = user;
            console.log('activeUser:', this.activeUser);
            this._router.navigate(['dashboard']);
          }
        })
      });
    }

    logout() {
      this.af.auth.logout();

      if(!this.af.auth.subscribe(auth => console.log(auth))) {
        this._router.navigate(['']);
      }
    }

    signUp(email, password) {
      this.af.auth.createUser({
        email: email,
        password: password
      })
      .then(success => {
        this.af.auth.subscribe(user => {
          if(!user) {
            alert('this did not work');
          } else {
            user.auth.sendEmailVerification().then(success => {
              console.log('email sent');
              this._router.navigate(['user-sign-up']);
            }), function (error) {
              console.log(error);
            }
          }
        })
      })
      .catch((error:any) => {
        if(error.code == 'auth/email-already-in-use') {
          this.emailAlreadyInUse = true;
        }
      });
    }

    logInActivated() {
      this.logInIsActive = true;
      this.signUpIsActive = false;
    }

    signUpActivated() {
      this.logInIsActive = false;
      this.signUpIsActive = true;
    }
}
