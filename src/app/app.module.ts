import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
<<<<<<< HEAD
=======
import { AppRoutingModule } from './app-routing.module';
import {AngularFireConfigModule} from './app-angularFire.module';
>>>>>>> 00c402289e8e5261cfc12d5168c4590b698ca613

import {SongService} from './services/songs.service';
import {UserService} from './services/user.service';
import {UserAuthService} from './services/userAuth.service';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import {UserSignInComponent} from './user-sign-in/user-sign-in.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {SongsComponent} from './songs/songs.component';
import {SidebarNavComponent} from './shared/sidebar-nav/sidebar-nav.component';
import {NavBarComponent} from './shared/navbar/navbar.component';

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
  },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    children: [
      {
        path: 'blue-shirt-songs',
        component: SongsComponent
      }
    ]
  }
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
=======

import {NavbarComponent} from './shared/navbar/navbar.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { SidebarNavComponent } from './shared/sidebar-nav/sidebar-nav.component';
import { SoloSongsComponent } from './solo-songs/solo-songs.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { SongsComponent } from './songs/songs.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { WhiteShirtSongsComponent } from './white-shirt-songs/white-shirt-songs.component';

>>>>>>> 00c402289e8e5261cfc12d5168c4590b698ca613

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UserSignInComponent,
    UserDashboardComponent,
    SongsComponent,
    SidebarNavComponent,
    NavBarComponent
=======
    WhiteShirtSongsComponent,
    UserSignInComponent,
    NavbarComponent,
    SidebarNavComponent,
    SoloSongsComponent,
    SongDetailComponent,
    SongsComponent,
    UserDashboardComponent,
    UserSettingsComponent,
    UserSignUpComponent,
    WhiteShirtSongsComponent,
>>>>>>> 00c402289e8e5261cfc12d5168c4590b698ca613
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
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
=======
    AppRoutingModule,
    AngularFireConfigModule
  ],
  providers: [
    SongService,
    UserService,
    UserAuthService
  ],
  bootstrap: [AppComponent]
})

>>>>>>> 00c402289e8e5261cfc12d5168c4590b698ca613
export class AppModule { }
