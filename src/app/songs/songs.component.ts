import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {SongService} from '../services/songs.service';
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

    // Allow the user to view a songs notes from a partleader ( possibly add an unread section )

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

  constructor(private _songsService: SongService, private _userService: UserService) { }

      ngOnInit() {
          let activeUserUID;
          // this._af.authState.subscribe(user => {
          //     if(user) {
          //         this.activeUserUID = user.uid;
          //         this._userService.getUserByUID(this.activeUserUID).subscribe(result => {
          //             console.log(result);
          //             this.activeUser = result;
          //             this.activeUserSongs = this.activeUser.songs;
          //         })
          //     }
          //   this.activeUser = this._userService.user
          // });
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
