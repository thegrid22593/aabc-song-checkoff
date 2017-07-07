import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-checkoff',
  templateUrl: './checkoff.component.html',
  styleUrls: ['./checkoff.component.scss']
})
export class CheckoffComponent implements OnInit {

  private partLeader;
  private partLeaderName;
  private partLeaderPart;
  private partLeaderAvatar;
  private partMembers;
  private totalSongs;

  public activeMember;
  public activeMemberSongs;
  public memberDialogActive: boolean = false;

  constructor(private _userService: UserService) { 
    this._userService.getCurrentUser().subscribe(user => this.partLeader = user);
  }

  ngOnInit() {
    //TODO

    this.partLeaderName = this.partLeader.firstName + ' ' + this.partLeader.lastName;
    this.partLeaderPart = this.partLeader.singingPart;
    this.partLeaderAvatar = this.partLeader.profilePicURL;
    console.log('partLeaderName', this.partLeaderName);

    // Grab that partleaders part and display the users from the part
    this._userService.getUsersByPart(this.partLeaderPart).then((partMembers) => {
      this.partMembers = partMembers;
      console.log('part members', this.partMembers);
    });

  }

  seeMemberSongs(uid:string) {
    // Allow the partleader to click into the user and see the songs they need to check off
    this._userService.getUserByUID(uid).subscribe((member) => {
      this.activeMember = member;
      // Passes this data to a check off member component with list of songs to check off.
      this.activeMemberSongs = member.songs;
      this.memberDialogActive = true;
    });
    
    // I need to add tries to data structure

    // Save the blueshirts tries in their data so we can display that on their dashboard

    // Possibly add a section for the partleader to add notes for the blueshirt to reference in his dashboard

    // Allow the partleader to select a song they have checked off. ( possible e-sig? )
  }

  closeMember() {
    this.activeMember = false;
    this.activeMemberSongs = false;
    this.memberDialogActive = false;
  }  

}
