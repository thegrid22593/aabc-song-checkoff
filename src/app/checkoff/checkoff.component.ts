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
  private partLeaderAvatar

  constructor(private _userService: UserService) { 
    this._userService.getCurrentUser().subscribe(user => this.partLeader = user);
  }

  ngOnInit() {
    //TODO

    this.partLeaderName = this.partLeader.firstName + ' ' + this.partLeader.lastName;
    this.partLeaderPart = this.partLeader.singingPart;
    this.partLeaderAvatar = this.partLeader.profilePicURL;
    console.log('partLeaderName', this.partLeaderName);

    // Get the part of the current part leader

    // Grab that partleaders part and display the users from the part

    // Allow the partleader to click into the user and see the songs they need to check off
    // and see how many tries they have had

    // Save the blueshirts tries in their data so we can display that on their dashboard

    // Possibly add a section for the partleader to add notes for the blueshirt to reference in his dashboard

    // Allow the partleader to select a song they have checked off. ( possible e-sig? )
  }
  
  

}
