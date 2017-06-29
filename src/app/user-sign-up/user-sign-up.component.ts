import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {UserService} from "../services/user.service";
import {SongService} from "../services/songs.service";
import 'rxjs/Rx';

@Component({
  selector: 'user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss']
})

export class UserSignUpComponent implements OnInit {
    singingPart: string;
    firstName: string;
    lastName: string;
    displayName: string;
    newUserUID: string;
    creationDate: any;
    songs: any;
    date: any;

    constructor(public af: AngularFireAuth, private _userService: UserService, private _router: Router, private _songsService: SongService) {
        this.af.authState.subscribe(user => {
            if(user) {
                this.newUserUID = user.uid;
            }
        })

        this.displayName = this.firstName + this.lastName;
        let date = new Date();
        let creationDay = date.getDay();
        let creationMonth = date.getMonth();
        let creationYear = date.getFullYear();

        this.creationDate = creationMonth + ' ' + creationDay + ', ' + creationYear;
    }

    ngOnInit() {

    }

    updateUserInfo(firstName, lastName, singingPart) {
        this._songsService.getAllSongs().then(result => {
            this.songs = result;
            console.log('inside service call songs: ', this.songs);

            let newUser = {
                uid: this.newUserUID,
                firstName: firstName,
                lastName: lastName,
                partLeader: false,
                startDate: this.creationDate,
                singingPart: singingPart,
                songs: this.songs
            }

            this._userService.addUser(newUser.uid, newUser);
            this._router.navigate(['dashboard']);
        });
    }
}
