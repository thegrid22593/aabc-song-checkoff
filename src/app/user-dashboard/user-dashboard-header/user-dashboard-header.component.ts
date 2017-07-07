import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from "../../services/user.service";
import * as _ from 'lodash';

@Component({
  selector: 'user-dashboard-header',
  templateUrl: './user-dashboard-header.component.html',
  styleUrls: ['./user-dashboard-header.component.scss']
})
export class UserDashboardHeaderComponent implements OnInit {

  public userName: string;
  public userPic: string;
  public currentUser;
  public currentUserSongs;
  public currentUserName;
  public currentUserPart;
  public lastCompletedSong: string;
  public currentUserStartDate: string;
  public completedSongs;
  public unCompletedSongs;
  public songCount;

  constructor(private _router: Router, public af: AngularFireAuth, private _userService: UserService) { }

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
          // this.getSingingParts();
          // this.getSongPercentage(this.completedSongs, this.currentUserSongs);
        });
      }
    });
  }

}
