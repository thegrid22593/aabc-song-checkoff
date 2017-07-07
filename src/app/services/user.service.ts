import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import {Router, ActivatedRoute} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {User} from '../interfaces/User';

@Injectable()
export class UserService {

    public user;


    constructor(private _http: Http, private _af: AngularFireAuth, private _router: Router, private db: AngularFireDatabase) {

    }

    getUserByUID(id:string) {
        if(this.user != null) {
            return Observable.of(this.user);
        } else {
            return this._http.get('https://aabc-checkoff.firebaseio.com/.json')
                .map((res: Response) =>  _.find(res.json().users, { 'uid': id }))
                .do((user) => {
                    this.user = user;
                    // console.log(this.user);
                })
                .catch(this.handleError);
        };
    }

    getUsersByPart(singingPart:string) {
        return this._http.get('https://aabc-checkoff.firebaseio.com/.json')
            .map((res: Response) => _.filter(res.json().users, {'singingPart': singingPart}))
            .toPromise()
            .catch(this.handleError);
    }

    addUser(key, user) {
        console.log('service:', user);
        this.db.list('users').update(key, user).then(success => {
            this._router.navigate(['blue-shirt-songs']);
        })
    }

    updateUser(key, user) {
        console.log('service', user);
        this.db.list('users').update(key, user).then(success => {
            console.log('updated user');
            console.log(user);
        });
    }

    private handleError(error: Response) {
        console.error(error);
        if(error.status == 404) {
            alert('Please change all references to /confidential/fixture/work.json to /fixture/work.json in the work.service.ts file');
        }
        return Observable.throw(error.json().error || 'Server error');
    }
}
