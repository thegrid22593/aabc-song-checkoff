<<<<<<< HEAD
import {Component} from '@angular/core';
import {SongService} from '../services/songs.service';

@Component({
    selector: 'solo-songs',
    template: require('./solo-songs.html'),
})

export class SoloSongsComponent {
    public songs: any;

    constructor(private _songsService: SongService) {
    }

    ngOnInit() {
        this._songsService.getAllSoloSongs().then(result => {
            this.songs = result;
            console.log('Songs: ', this.songs);
        });
    }
}
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solo-songs',
  templateUrl: './solo-songs.component.html',
  styleUrls: ['./solo-songs.component.scss']
})
export class SoloSongsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
>>>>>>> 00c402289e8e5261cfc12d5168c4590b698ca613
