import {Component, OnInit} from '@angular/core';
import {SongService} from './services/songs.service';
import 'rxjs/Rx';
import {Router, ActivatedRoute} from '@angular/router';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private _router: Router, public af: AngularFire) {

  }

  ngOnInit() {
    this.af.auth.subscribe(user => {
      if(user) {
        this._router.navigate(['dashboard']);
        console.log(user);
      } else {
        this._router.navigate(['sign-in']);
        console.log(user);
      }
    });
  }
}
