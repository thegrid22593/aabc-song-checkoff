import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-user-dashboard-feedback',
  templateUrl: './user-dashboard-feedback.component.html',
  styleUrls: ['./user-dashboard-feedback.component.scss']
})
export class UserDashboardFeedbackComponent implements OnInit {
  public currentUser;
  public currentUserSongs;
  public songsWithNotes;
  public activeNote;

  constructor(private _userService: UserService) { 
    this._userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      this.currentUserSongs = this.currentUser.songs;
      this.filterSongs();
    });
  }

  ngOnInit() {
    console.log('feedback', this.currentUser);
  }

  activateNote(note) {
    console.log(note);
    this.activeNote = note;
  }

  filterSongs() {
    this.songsWithNotes = _.filter(this.currentUserSongs, 'notes');
    console.log('songs with notes:', this.songsWithNotes);
  }
  

}
