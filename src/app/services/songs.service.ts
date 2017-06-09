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

    searchSongs(str:string) {
        return this._http.get('./assets/fixtures/songs.json')
            .map((response: Response) => _.find(response.json().songs, {'name': str}))
    }

    // searchSong(userId:string, term: string): Observable<Song[]> {
    //     return this._http
    //         .get('https://aabc-checkoff.firebaseio.com/users/' + userId + '/songs/?name=${term}')
    //         .map(( response: Response ) => response.json().data);
    // }

    filterSongByDifficulty(difficulty: string, userId: string) {
      return this._http
          .get('https://aabc-checkoff.firebaseio.com/users/' + userId + '/songs/')
          .map(( response: Response ) => _.orderBy(response.json(), {'difficulty': difficulty}))
          .toPromise()
          .catch(this.handleError);
    }

    fetchData() {
        console.log('running');
        return this._http.get('https://aabc-checkoff.firebaseio.com/.json').map(
            (res) => res.json()
        ).subscribe(
            (data) => console.log(data)
        );
    }

    // getPartSongs(partName) {
    //     return this._http.get('/fixutres/songs.json')
    //         .map((response: Response) => _.find(response.json().songs.bartione, {'part': partName}))
    //         .toPromise()
    //         .catch(this.handleError);
    // }

    private handleError(error: Response) {
        console.error(error);
        if(error.status == 404) {
            alert('Please change all references to /confidential/fixture/work.json to /fixture/work.json in the work.service.ts file');
        }
        return Observable.throw(error.json().error || 'Server error');
    }
}
