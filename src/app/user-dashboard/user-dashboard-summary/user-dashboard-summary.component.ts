import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from "../../services/user.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-user-dashboard-summary',
  templateUrl: './user-dashboard-summary.component.html',
  styleUrls: ['./user-dashboard-summary.component.scss']
})
export class UserDashboardSummaryComponent implements OnInit {

  // TODO: 
  // Add a dashboard menu...
  // Adds a section for the partleaders of the current part.
  // Add a section called messages/notes that has the notes for all the users songs. Unread and read. etc.

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

  private baritoneAvgPercentage: number;
  private secondTenorAvgPercentage: number;
  private firstTenorAvgPercentage: number;
  private bassAvgPercentage: number;

  constructor(private _router: Router, public af: AngularFireAuth, private _userService: UserService) {

  }

  ngOnInit() {
    this.af.authState.subscribe(user => {
      if(!user) {
        this._router.navigate[('sign-in')];
      } else {
        this.userName = user.displayName;
        this.userPic = user.photoURL;

        this._userService.getUserByUID(user.uid).subscribe((user) => {
          this.currentUser = user;
          localStorage.setItem('currentUser', this.currentUser);
          this.currentUserSongs = this.currentUser.songs;
          this.currentUserName = this.currentUser.firstName + ' ' + this.currentUser.lastName;
          this.currentUserPart = this.currentUser.singingPart;
          this.lastCompletedSong = this.currentUser.lastCompletedSong;
          this.currentUserStartDate = this.currentUser.startDate;

          for(let song of this.currentUserSongs) {
            if(song.completed == true) {
              this.completedSongs++;
            } else {
              this.unCompletedSongs++;
            }
          }
          this.songCount = this.currentUserSongs.length;
          this.getSingingParts();
        });
      }
    });
  }

  getSingingParts() {

    // Checks Local Storage before grabbing from firebase on all parts
    if( !localStorage.getItem('bassPart') ) {
      this._userService.getUsersByPart('Bass').then(result => {
        this.bassPart = result;
        // localStorage.setItem('bassPart', JSON.stringify( this.bassPart ));
        this.bassAvgPercentage = this.getWholePartAverage( this.bassPart );
      });
    } else {
      this.bassPart = JSON.parse( localStorage.getItem('bassPart') );
      this.bassAvgPercentage = this.getWholePartAverage( this.bassPart );
    }

    if( !localStorage.getItem('firstTenorPart') ) {
      this._userService.getUsersByPart('First Tenor').then(result => {
        this.firstTenorPart = result;
        // localStorage.setItem('firstTenorPart', JSON.stringify( this.firstTenorPart ));
        this.firstTenorAvgPercentage = this.getWholePartAverage( this.firstTenorPart );
      });
    } else {
      this.firstTenorPart = JSON.parse( localStorage.getItem('firstTenorPart') );
      this.firstTenorAvgPercentage = this.getWholePartAverage( this.firstTenorPart );
    }

    if( !localStorage.getItem('secondTenorPart') ) {
      this._userService.getUsersByPart('Second Tenor').then(result => {
        this.secondTenorPart = result;
        // localStorage.setItem('secondTenorPart', JSON.stringify( this.secondTenorPart ));
        this.secondTenorAvgPercentage = this.getWholePartAverage( this.secondTenorPart );
      });
    } else {
      this.secondTenorPart = JSON.parse( localStorage.getItem('secondTenorPart') );
      this.secondTenorAvgPercentage = this.getWholePartAverage( this.secondTenorPart );
    }

    if( !localStorage.getItem('baritonePart') ) {
      this._userService.getUsersByPart('Baritone').then(result => {
        this.baritonePart = result;
        // localStorage.setItem('baritonePart', JSON.stringify( this.baritonePart ));
        this.baritoneAvgPercentage = this.getWholePartAverage( this.baritonePart );
      });
    } else {
      this.baritonePart = JSON.parse( localStorage.getItem('baritonePart') );
      this.baritoneAvgPercentage = this.getWholePartAverage( this.baritonePart );
    }

  }

  getWholePartAverage(singingPart) {
    // Find number of kids in part
    console.log('singingPart', singingPart);
    console.log(singingPart.length);
    let totalKidsInPart = singingPart.length;
    let totalPercentage = totalKidsInPart * 100;
    let addedPercentage = 0;
    // Get all percentages of the current part
    for(let member of singingPart) {
      // Add all percentages of the current part
      addedPercentage += member.percentage;
      // console.log(member.percentage);
      // console.log(totalPercentage);
      // console.log('totalkidspercentage', addedPercentage);
    }

    let totalKidsPercentage = Math.round((addedPercentage / totalPercentage) * 100);
    return totalKidsPercentage;

  }

}
