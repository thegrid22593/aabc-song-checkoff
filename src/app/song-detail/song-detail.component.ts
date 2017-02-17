<<<<<<< HEAD
import {Component} from '@angular/core';
import {SongService} from '../services/songs.service';
import {Router, ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'song-detail',
    template: require('./song-detail.html'),
})

export class SongDetailComponent {

    constructor(private _songsService: SongService, private route: ActivatedRoute) {

    }
}
=======
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {SongService} from '../services/songs.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})


export class SongDetailComponent implements OnChanges {

  // From Song Component
  @Input() activeSong;
  @Input() detailPanelCollapsed;
  @Input() activeUserSongs;
  @Input() activeUser;

  public totalSongs: any
  public songPercentage: any;

  public detailPanelImg: string = '../../images/detail-panel.jpg';

  constructor(private _songsService: SongService, private _userService: UserService) { }


  ngOnInit() {
  }

  ngOnChanges() {

  }

  songCompleted(name:string) {
      let completedSongs = 0;
      for (let song of this.activeUserSongs) {
          if (song.name == name) {
              song.completed = true;
          }
          if (song.completed === true) {
              completedSongs++;
          }
      }
      this.totalSongs = this.activeUserSongs.length;
      this.songPercentage = Math.floor(completedSongs / this.totalSongs * 100);
      let updatedUser = {
          songs: this.activeUserSongs,
          lastCompletedSong: name,
          percentage: this.songPercentage,
          completedSongs: completedSongs
      }

      this._userService.updateUser(this.activeUser.uid, updatedUser);
  }

}
>>>>>>> 00c402289e8e5261cfc12d5168c4590b698ca613
