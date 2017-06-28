import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {SongService} from '../services/songs.service';
import {AngularFire, FirebaseListObservable } from 'angularfire2';
import {UserService} from "../services/user.service";
import * as _ from 'lodash';
import {Subject} from 'rxjs/Subject';
import {Song} from '../song';

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
  public detailPanelCollapsed: boolean = false;
  public currentSongType: string;
  public activeUser: any;
  public activeUserSongs: any;
  public songList: any;
  public activeSongDetail: any;
  public activeUserUID: string;

  constructor(private _songsService: SongService, private _af: AngularFire, private _userService: UserService) { }

      ngOnInit() {
          let activeUserUID;
          this._af.auth.subscribe(user => {
              if(user) {
                  this.activeUserUID = user.uid;
                  this._userService.getUserByUID(this.activeUserUID).then(result => {
                      console.log(result);
                      this.activeUser = result;
                      this.activeUserSongs = this.activeUser.songs;
                  })
              }
          });
      }

      openSongDetails(name:string) {
          console.log(this.detailPanelCollapsed);
          if(!this.detailPanelCollapsed) {
             this.detailPanelCollapsed = true;
             console.log(this.detailPanelCollapsed)
          }

          this._songsService.getSongByName(name).then(result => {
              this.activeSongDetail = result;
              console.log(this.activeSongDetail);
          })
      }

      detailPanelUpdate(event) {
        console.log('event', event);
        this.detailPanelCollapsed = event.detailPanel;
      }
  }
