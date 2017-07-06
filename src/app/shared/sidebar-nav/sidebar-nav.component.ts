import * as _ from 'lodash';
import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from "../../services/user.service";

@Component({
    selector: 'sidebar-nav',
    templateUrl: './sidebar-nav.component.html',
      styleUrls: ['./sidebar-nav.component.scss']
})

export class SidebarNavComponent {
    private currentUser;
    private partLeader: boolean;
    private currentUserSongs;
    private completedSongs: number = 0;
    private unCompletedSongs: number = 0;
    private songCount;
    private userPercentage;
    private userSongsRemaining;
    private totalSongs: number;

    constructor(private _router: Router, public af: AngularFireAuth, private _userService: UserService) {

    }

    ngOnInit() {
      this.af.authState.subscribe(user => {
        this._userService.getUserByUID(user.uid).subscribe(result => {
          this.currentUser = result;
          localStorage.setItem('currentUser', JSON.stringify( this.currentUser ));
          this.partLeader = this.currentUser.partLeader;
          this.currentUserSongs = this.currentUser.songs;
          this.totalSongs = this.currentUser.songs.length;
          this.userPercentage = this.currentUser.percentage.toString();

          for(let song of this.currentUserSongs) {
            if(song.completed == true) {
              this.completedSongs++;
            } else {
              this.unCompletedSongs++;
            }
          }
          this.songCount = this.currentUserSongs.length;
          this.userSongsRemaining = this.currentUserSongs.length - this.completedSongs;
        });
      });
    }
  }
