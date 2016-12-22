import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import {SongService} from './services/songs.service';
import {UserService} from './services/user.service';
import {UserAuthService} from './services/userAuth.service';

import { AppComponent } from './app.component';
import {UserSignInComponent} from './user-sign-in/user-sign-in.component';

const firebaseConfig = {
  apiKey: "AIzaSyAYThpdcu3zb4ll_q6BJkpaWYS8XTVVz4Y",
  authDomain: "aabc-checkoff.firebaseapp.com",
  databaseURL: "https://aabc-checkoff.firebaseio.com",
  storageBucket: "aabc-checkoff.appspot.com",
  messagingSenderId: "920421563150"
}

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'sign-in',
    component: UserSignInComponent
  }
//   {
//     path: 'dashboard',
//     component: UserDashboardComponent,
//     children: [
//       {
//         path: 'blue-shirt-songs',
//         component: SongsComponent
//       }
//     ]
//   },
//   {
//     path: 'white-shirt-songs',
//     component: WhiteShirtSongsComponent
//   },
//   {
//     path: 'blue-shirt-songs',
//     component: SongsComponent
//   },
//   {
//     path: 'solo-songs',
//     component: SoloSongsComponent
//   },
//   {
//     path: 'user-settings',
//     component: UserSettingsComponent
//   },
//   {
//     path: 'user-sign-up',
//     component: UserSignUpComponent
//   },
//   {
//     path: 'song',
//     component: SongDetailComponent
//   }
];

@NgModule({
  declarations: [
    AppComponent,
    UserSignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [
  SongService,
  UserService,
  UserAuthService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
