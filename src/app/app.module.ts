import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireConfigModule} from './app-angularFire.module';

import {SongService} from './services/songs.service';
import {UserService} from './services/user.service';
import {UserAuthService} from './services/userAuth.service';

import { AppComponent } from './app.component';

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


@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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

export class AppModule { }
