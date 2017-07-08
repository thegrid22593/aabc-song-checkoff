import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';

import { NavBarComponent } from './shared/navbar/navbar.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { SidebarNavComponent } from './shared/sidebar-nav/sidebar-nav.component';
import { SoloSongsComponent } from './solo-songs/solo-songs.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { SongsComponent } from './songs/songs.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { WhiteShirtSongsComponent } from './white-shirt-songs/white-shirt-songs.component';
import { CheckoffComponent } from './checkoff/checkoff.component';
import { UserDashboardSummaryComponent } from './user-dashboard/user-dashboard-summary/user-dashboard-summary.component';
import { UserDashboardFeedbackComponent } from './user-dashboard/user-dashboard-feedback/user-dashboard-feedback.component';
import { UserDashboardPartComparisonComponent } from './user-dashboard/user-dashboard-part-comparison/user-dashboard-part-comparison.component';



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
    component: UserDashboardComponent,
    children: [
      {
        path: 'summary',
        component: UserDashboardSummaryComponent,
      },
      {
        path: 'feedback',
        component: UserDashboardFeedbackComponent,
      },
      {
        path: 'part-comparison',
        component: UserDashboardPartComparisonComponent
      },
      {
        path: '',
        redirectTo: 'summary',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'white-shirt-songs',
    component: WhiteShirtSongsComponent
  },
  {
    path: 'songs',
    component: SongsComponent
  },
  {
    path: 'checkoff',
    component: CheckoffComponent
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
