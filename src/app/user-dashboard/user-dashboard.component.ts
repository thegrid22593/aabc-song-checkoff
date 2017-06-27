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
  public defaultUserPic: string = '../assets/images/user.png';

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
          localStorage.setItem('currentUser', this.currentUser);
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
      localStorage.setItem('songPercentage', JSON.stringify( this.songPercentage ));
    }
  }

  getSingingParts() {

    // Checks Local Storage before grabbing from firebase on all parts
    if( !localStorage.getItem('bassPart') ) {
      this._userService.getUsersByPart('Bass').then(result => {
        this.bassPart = result;
        localStorage.setItem('bassPart', JSON.stringify( this.bassPart ));
      });
    } else {
      this.bassPart = JSON.parse( localStorage.getItem('bassPart') );
    }

    if( !localStorage.getItem('firstTenorPart') ) {
      this._userService.getUsersByPart('Bass').then(result => {
        this.firstTenorPart = result;
        localStorage.setItem('firstTenorPart', JSON.stringify( this.firstTenorPart ));
      });
    } else {
      this.firstTenorPart = JSON.parse( localStorage.getItem('firstTenorPart') );
    }

    if( !localStorage.getItem('secondTenorPart') ) {
      this._userService.getUsersByPart('Bass').then(result => {
        this.secondTenorPart = result;
        localStorage.setItem('secondTenorPart', JSON.stringify( this.secondTenorPart ));
      });
    } else {
      this.secondTenorPart = JSON.parse( localStorage.getItem('secondTenorPart') );
    }

    if( !localStorage.getItem('baritonePart') ) {
      this._userService.getUsersByPart('Baritone').then(result => {
        this.baritonePart = result;
        localStorage.setItem('baritonePart', JSON.stringify( this.baritonePart ));
      });
    } else {
      this.baritonePart = JSON.parse( localStorage.getItem('baritonePart') );
    }

  }

}
