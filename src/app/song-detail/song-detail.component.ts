import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
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

  @Output() songChange = new EventEmitter();

  public totalSongs: any
  public songPercentage: any;

  public detailPanelImg: string = '../../images/detail-panel.jpg';

  public activeSongURL: string;
  public currentSong: string;
  public currentSongType: string;

  constructor(private _songsService: SongService, private _userService: UserService) { }


  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.detailPanelCollapsed);
  }

  playSong(songURL:string, activeSong:any, songType:string) {
    console.log(songURL);
    let playingSong = {
      url: songURL,
      activeSong: activeSong,
      type: songType
    }
    this.songChange.emit(playingSong);
    this.activeSongURL = songURL;
    this.currentSong = activeSong;
    this.currentSongType = songType;
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
