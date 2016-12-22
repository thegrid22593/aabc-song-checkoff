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