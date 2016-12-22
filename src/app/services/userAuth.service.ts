import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {AngularFire} from 'angularfire2';
import * as _ from 'lodash';

@Injectable()
export class UserAuthService {
    constructor(private _http: Http, public af: AngularFire) {}

    getCurrentUser() {
        return this.af.auth.subscribe(user => {
            if(user) {
                console.log('true', user);
                return user;
            } else {
                console.log('false');
            }
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