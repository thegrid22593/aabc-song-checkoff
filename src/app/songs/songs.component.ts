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
  public currentSong: any;
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

      playSong(songURL:string, activeSong:any, songType:string) {
          this.activeSongURL = songURL;
          this.currentSong = activeSong;
          this.currentSongType = songType;
      }

      filterByDifficulty(difficulty) {
        this._songsService.filterSongByDifficulty(difficulty, this.activeUserUID).then(result => {
          console.log(result);
          this.activeUserSongs = result;
        });
      }

      search(term: string): void {
        // this.searchTerms.next(term);
        // console.log(term);
        // this.songs = this.searchTerms
        //   .debounceTime(300)        // wait for 300ms pause in events
        //   .distinctUntilChanged()   // ignore if next search term is same as previous
        //   .switchMap(term => term   // switch to new observable each time
        //     // return the http search observable
        //     ? this._songsService.searchSong(term, this.activeUserUID)
        //     // or the observable of empty heroes if no search term
        //     : Observable.of<Song[]>([]))
        //   .catch(error => {
        //     // TODO: real error handling
        //     console.log(error);
        //     return Observable.of<Song[]>([]);
        //   });
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
          // console.log('clicked', name);
      }
  }
