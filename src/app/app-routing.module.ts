import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

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



const appRoutes: Routes = [
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
    component: UserDashboardComponent
  },
  {
    path: 'white-shirt-songs',
    component: WhiteShirtSongsComponent
  },
  {
    path: 'music-library',
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
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
