import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class SongService {
    constructor(private _http: Http) {

    }

    getAllSongs() {
        return this._http.get('./assets/fixtures/songs.json')
            .map((response: Response) => response.json().songs)
            .toPromise()
            .catch(this.handleError);
    }

    getAllSoloSongs() {
        return this._http.get('./assets/fixtures/songs.json')
            .map((response: Response) => _.filter(response.json().songs, {'solo': true}))
            .toPromise()
            .catch(this.handleError);
    }

    getSongByName(songName:string) {
        return this._http.get('./assets/fixtures/songs.json')
            .map((response: Response) => _.find(response.json().songs, {'name': songName}))
            .toPromise()
            .catch(this.handleError);
    }

    fetchData() {
        return this._http.get('https://aabc-checkoff.firebaseio.com/.json').map(
            (res) => res.json()
        ).subscribe(
            (data) => console.log('subscribe', data)
        );
    }

    private handleError(error: Response) {
        console.error(error);
        if(error.status == 404) {
            alert('Please change all references to /confidential/fixture/work.json to /fixture/work.json in the work.service.ts file');
        }
        return Observable.throw(error.json().error || 'Server error');
    }
}
