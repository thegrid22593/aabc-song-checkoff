import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {SongService} from '../services/songs.service';
import {AngularFire, FirebaseListObservable } from 'angularfire2';
import {UserService} from "../services/user.service";
import * as _ from 'lodash';

@Component({
  selector: 'songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  public songs: any;
  public activeSong: any;
  public activeSongURL: any;
  public searchStr: string;
  public searchString: string;
  public detailPanelCollapsed: boolean;
  public currentSong: any;
  public currentSongType: string;
  public activeUser: any;
  public activeUserSongs: any;

  public songList: any;
  public activeSongDetail: any;

      constructor(private _songsService: SongService, private _af: AngularFire, private _userService: UserService) {
          this.detailPanelCollapsed = true;
      }

      ngOnInit() {
          let activeUserUID;
          this._af.auth.subscribe(user => {
              if(user) {
                  let activeUserUID = user.uid;
                  this._userService.getUserByUID(activeUserUID).then(result => {
                      console.log(result);
                      this.activeUser = result;
                      this.activeUserSongs = this.activeUser.songs;
                  })
              }
          })
      }

      playSong(songURL:string, activeSong:any, songType:string) {
          this.activeSongURL = songURL;
          this.currentSong = activeSong;
          this.currentSongType = songType;
      }

      openSongDetails(name:string) {

          if(this.detailPanelCollapsed) {
             this.detailPanelCollapsed = false;
          }

          this._songsService.getSongByName(name).then(result => {
              this.activeSongDetail = result;
              console.log(this.activeSongDetail);
          })
          console.log('clicked', name);
      }
  }
