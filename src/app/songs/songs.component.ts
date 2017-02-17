<<<<<<< HEAD
import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {SongService} from '../services/songs.service';
import {Router, ActivatedRoute} from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {UserService} from "../services/user.service";
import * as _ from 'lodash';



@Component({
    selector: 'songs',
    template: require('./songs.html'),
})

export class SongsComponent {
    public songs: any;
    public activeSong: any;
    public activeSongDetail: any;
    public activeSongURL: any;
    public searchStr: string;
    public searchString: string;
    public detailPanelImg: string;
    public detailPanelCollapsed: boolean;
    public currentSong: any;
    public currentSongType: string;
    public activeUser: any;
    public activeUserSongs: any;
    public totalSongs: any
    public songPercentage: any;

    public songList: any;

    constructor(private _songsService: SongService, private router: Router, private route: ActivatedRoute, private _af: AngularFire, private _userService: UserService) {
        this.detailPanelImg = '../../images/detail-panel.jpg';
        this.detailPanelCollapsed = true;
    }

    ngOnInit() {
        let activeUserUID;
        this._af.auth.subscribe(user => {
            if(user) {
                let activeUserUID = user.uid;
                // console.log('subscribed user id:', activeUserUID);
                this._userService.getUserByUID(activeUserUID).then(result => {
                    console.log(result);
                    this.activeUser = result;
                    this.activeUserSongs = this.activeUser.songs;
                })
            }
        })
        // this._songsService.getAllSongs().then(result => {
        //     this.songs = result;
        //     // console.log('Songs: ', this.songs);
        // });
    }

    playSong(songURL:string, activeSong:any, songType:string) {
        // console.log('clicked song:', songURL);
        this.activeSongURL = songURL;
        this.currentSong = activeSong;
        this.currentSongType = songType;
    }

    // searchSongs(str:string) {
    //     console.log(str);
    //     this._songsService.searchSongs(str).then(result => {
    //         this.songs = result;
    //     });
    //     console.log(this.songs);
    // }

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
        // console.log('total', this.totalSongs);
        // console.log('completed', completedSongs);
        this.songPercentage = Math.floor(completedSongs / this.totalSongs * 100);
        // console.log('activeUserSongs:', this.activeUserSongs);
        // console.log('uid', this.activeUser.uid);
        let updatedUser = {
            songs: this.activeUserSongs,
            lastCompletedSong: name,
            percentage: this.songPercentage,
            completedSongs: completedSongs
        }

        this._userService.updateUser(this.activeUser.uid, updatedUser)
    }
}
=======
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
  public detailPanelCollapsed: boolean;
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
>>>>>>> 00c402289e8e5261cfc12d5168c4590b698ca613
