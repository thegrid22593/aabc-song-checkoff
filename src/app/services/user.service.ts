import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Router, ActivatedRoute} from '@angular/router';
import {AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(private _http: Http, private _af: AngularFire, private _router: Router) {

    }

    getUserByUID(id:string) {
        return this._http.get('https://aabc-checkoff.firebaseio.com/.json')
            .map((response: Response) => _.find(response.json().users, {'uid': id}))
            .toPromise()
            .catch(this.handleError);
    }

    getUsersByPart(singingPart:string) {
        return this._http.get('https://aabc-checkoff.firebaseio.com/.json')
            .map((response: Response) => _.filter(response.json().users, {'singingPart': singingPart}))
            .toPromise()
            .catch(this.handleError);
    }

    addUser(key, user) {
        console.log('service:', user);
        this._af.database.list('users').update(key, user).then(success => {
            this._router.navigate(['blue-shirt-songs']);
        })
    }

    updateUser(key, user) {
        console.log('service', user);
        this._af.database.list('users').update(key, user).then(success => {
            console.log('updated user');
        })
    }

    addUserProfilePic() {

    }

    getCurrentUser() {
        this._af.database.list('https://aabc-checkoff.firebaseio.com/users/EWMIQ5yKlcgj3vxL6WZxu0Uuq5o1');
    }

    // fetchData() {
    //     console.log('running');
    //     return this._http.get('https://aabc-checkoff.firebaseio.com/users/.json').map(
    //         (res) => res.json()
    //     ).subscribe(
    //         (data) => console.log(data)
    //     );
    // }

    private handleError(error: Response) {
        console.error(error);
        if(error.status == 404) {
            alert('Please change all references to /confidential/fixture/work.json to /fixture/work.json in the work.service.ts file');
        }
        return Observable.throw(error.json().error || 'Server error');
    }
}
