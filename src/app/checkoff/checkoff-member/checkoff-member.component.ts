import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'checkoff-member',
  templateUrl: './checkoff-member.component.html',
  styleUrls: ['./checkoff-member.component.scss']
})
export class CheckoffMemberComponent implements OnInit {

  // PartLeader
  public partLeaderUser;
  public partLeaderName;

  // Check off Member
  public checkOffMemberID: string;
  public checkoffMember;
  public checkoffMemberSongs;
  public addNoteActive: boolean = false;

  //Note
  public noteTitle: string;
  public noteContent: string;
  public addNoteSongName: string;

  constructor(private _activeRoute: ActivatedRoute, private _userService: UserService) {
    this._userService.getCurrentUser().subscribe((user) => {
      this.partLeaderUser = user;
      this.partLeaderName = user.firstName + ' ' + user.lastName
    })
   }

  ngOnInit() {
    this._activeRoute.params.subscribe(params => {
       this.checkOffMemberID = params['id']; // (+) converts string 'id' to a number
    });

    this._userService.getUserByUID(this.checkOffMemberID).subscribe((user) => {
      this.checkoffMember = user;
      this.checkoffMemberSongs = this.checkoffMember.songs;
    });
  }

  addNote(songName) {
    this.addNoteActive = true;
    this.addNoteSongName = songName;
  }

  submitNote() {
    console.log('working');
    let songName = this.addNoteSongName;
    let newNote = {
        title: this.noteTitle,
        content: this.noteContent,
        partLeader: this.partLeaderName,
        read: false
      }

    for (let song of this.checkoffMemberSongs) {
        if (song.name == songName) {
          console.log(song.notes);
          if(song.notes === undefined) {
            // Add array with new note if there are no notes currently on the song.
            song.notes = Array(newNote);
          } else {
            song.notes.push(newNote);
          }
        }
    }
    let updatedUser = {
        songs: this.checkoffMemberSongs,
    }

    this._userService.updateUser(this.checkOffMemberID, updatedUser);
    this.addNoteActive = false;
  }

  // Click on one of the users songs to see various tries, weather the songs is complete, when it was completed.
  // Be able to click checkoff on a song and pass that data to another component which will allow the partleader to checkoff that song for the user.
  // Possibly add a router for these components so that it pops up in the url as well.
  // Be able to add notes to a members song (update the song data structure for the user)

}
