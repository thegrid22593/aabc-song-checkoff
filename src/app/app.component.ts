import {Component, OnInit} from '@angular/core';
import {SongService} from './services/songs.service';
import {Router, ActivatedRoute} from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private _router: Router) {

  }

  ngOnInit() {
    // this.afAuth.authState.subscribe(user => {
    //   if(user) {
    //     this._router.navigate(['dashboard']);
    //     console.log('user', user);
    //   } else {
    //     this._router.navigate(['sign-in']);
    //     console.log('user', user);
    //   }
    // });
  }
}
