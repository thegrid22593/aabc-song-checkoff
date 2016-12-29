import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { AngularFire, FirebaseObjectObservable} from 'angularfire2';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from "../services/user.service";
import * as _ from 'lodash';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

    public user: any;
    public userName: string;

    displayName: string;
    photoURL: string;

    public song;

    public currentUser: any;
    public currentUserPart: any;
    public lastCompletedSong: any;
    public currentUserStartDate: any;
    public currentUserName: any;
    public currentUserSongs: any;
    public songCount: any;
    public completedSongs = 0;
    public unCompletedSongs = 0;
    public songPercentage;
    public usersSingingPart: any;
    public userPic: string;

    // Parts
    public bassPart;
    public bassPartPreOrdered;
    public firstTenorPart;
    public firstTenorPartPreOrdered;
    public secondTenorPart;
    public secondTenorPartPreOrdered;
    public baritonePart;
    public baritonePartPreOrdered;

    constructor(private _router: Router, public af: AngularFire, private _userService: UserService) {

    }

    ngOnInit() {
        this.af.auth.subscribe(user => {
            if(!user) {
                this._router.navigate[('sign-in')];
            } else {
                this.userName = user.auth.displayName;
                this.userPic = user.auth.photoURL;
                this._userService.getUserByUID(user.uid).then(result => {
                    this.currentUser = result;
                    this.currentUserSongs = this.currentUser.songs;
                    this.currentUserName = this.currentUser.firstName + ' ' + this.currentUser.lastName;
                    this.currentUserPart = this.currentUser.singingPart;
                    this.lastCompletedSong = this.currentUser.lastCompletedSong;
                    this.currentUserStartDate = this.currentUser.startDate;
                    console.log('currentUser', this.currentUser);

                    for(let song of this.currentUserSongs) {
                        if(song.completed == true) {
                            this.completedSongs++;
                        } else {
                            this.unCompletedSongs++;
                        }
                    }

                    this.songCount = this.currentUserSongs.length;
                    this.getSingingParts();
                    this.getSongPercentage(this.completedSongs, this.currentUserSongs);
                });
            }
        });
    }

    getSongPercentage(completedSongs, currentUserSongs) {
        let totalSongs = currentUserSongs.length
        this.songPercentage = Math.floor(completedSongs / totalSongs * 100);
        this.updateUserPercentage(this.songPercentage);
    }

    updateUserPercentage(songPercentage) {
        if(this.currentUser.percentage !== songPercentage) {
            let updatedUser = {
                percentage: this.songPercentage,
                completedSongs: this.completedSongs
            }
            this._userService.updateUser(this.currentUser.uid, updatedUser);
        }
    }

    getSingingParts() {

        this._userService.getUsersByPart('Bass').then(result => {
            this.bassPartPreOrdered = result;
            this.bassPart = _.orderBy(this.bassPartPreOrdered, ['percentage'], ['desc']);
            console.log('bass ordered', this.bassPart);
            // console.log('users singing part', result);
        });

        this._userService.getUsersByPart('First Tenor').then(result => {
            this.firstTenorPartPreOrdered = result;
            this.firstTenorPart = _.orderBy(this.firstTenorPartPreOrdered, ['percentage'], ['desc']);
        });

        this._userService.getUsersByPart('Second Tenor').then(result => {
          this.secondTenorPartPreOrdered = result;
            this.secondTenorPart = _.orderBy(this.secondTenorPartPreOrdered, ['percentage'], ['desc']);
        });

        this._userService.getUsersByPart('Baritone').then(result => {
            this.baritonePartPreOrdered = result;
            this.baritonePart = _.orderBy(this.baritonePartPreOrdered, ['percentage'], ['desc']);
        })
    }


}
