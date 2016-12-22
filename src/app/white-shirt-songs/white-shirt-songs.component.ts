import {Component, OnInit} from '@angular/core';
import {SongService} from '../services/songs.service';
import {Router, ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-white-shirt-songs',
  templateUrl: './white-shirt-songs.component.html',
  styleUrls: ['./white-shirt-songs.component.scss']
})

export class WhiteShirtSongsComponent implements OnInit {
  public songs: any;
  public activeSong: any;
  public activeSongURL: any;

  constructor(private _songsService: SongService, private router: Router, private route: ActivatedRoute) {
    console.log(this.route);
  }

  ngOnInit() {
    this._songsService.getAllSongs().then(result => {
      this.songs = result;
      console.log('Songs: ', this.songs);
    });
  }

  playSong(songName:string) {
    console.log('clicked song:', songName)

    this._songsService.getSongByName(songName).then(result => {
      this.activeSong = result;
      console.log('active song', this.activeSong);
      this.activeSongURL = this.activeSong.baritone.pianoWords;
      console.log(this.activeSongURL);
    })
  }

  selectSong(songName:string) {
    this.router.navigate(['/song'], songName);
  }
}
