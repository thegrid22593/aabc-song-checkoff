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