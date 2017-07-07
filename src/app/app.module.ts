import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import {SongService} from './services/songs.service';
import {UserService} from './services/user.service';
import {UserAuthService} from './services/userAuth.service';

import {SoloSongsComponent} from './solo-songs/solo-songs.component';
import {AppComponent} from './app.component';
import {UserSignInComponent} from './user-sign-in/user-sign-in.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {SongsComponent} from './songs/songs.component';
import {SongDetailComponent} from './song-detail/song-detail.component';
import {UserSettingsComponent} from './user-settings/user-settings.component';
import {UserSignUpComponent} from './user-sign-up/user-sign-up.component';
import {SidebarNavComponent} from './shared/sidebar-nav/sidebar-nav.component';
import {NavBarComponent} from './shared/navbar/navbar.component';
import {WhiteShirtSongsComponent} from './white-shirt-songs/white-shirt-songs.component';
import { CheckoffComponent } from './checkoff/checkoff.component';
import { CheckoffMemberComponent } from './checkoff/checkoff-member/checkoff-member.component';
import { CheckoffSongComponent } from './checkoff/checkoff-song/checkoff-song.component';

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
  },
  {
    path: 'white-shirt-songs',
    component: WhiteShirtSongsComponent
  },
  {
    path: 'checkoff',
    component: CheckoffComponent
  },
  {
    path: 'songs',
    component: SongsComponent
  },
  {
    path: 'solo-songs',
    component: SoloSongsComponent
  },
  {
    path: 'user-settings',
    component: UserSettingsComponent
  },
  {
    path: 'user-sign-up',
    component: UserSignUpComponent
  },
  {
    path: 'song',
    component: SongDetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserSignInComponent,
    UserDashboardComponent,
    SongsComponent,
    SidebarNavComponent,
    NavBarComponent,
    WhiteShirtSongsComponent,
    UserSignInComponent,
    SidebarNavComponent,
    SoloSongsComponent,
    SongDetailComponent,
    SongsComponent,
    UserDashboardComponent,
    UserSettingsComponent,
    UserSignUpComponent,
    WhiteShirtSongsComponent,
    CheckoffComponent,
    CheckoffMemberComponent,
    CheckoffSongComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    RouterModule.forRoot(routes)
  ],
  providers: [
  SongService,
  UserService,
  UserAuthService
],
  bootstrap: [AppComponent]
})

export class AppModule { }
