import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'checkoff-member',
  templateUrl: './checkoff-member.component.html',
  styleUrls: ['./checkoff-member.component.scss']
})
export class CheckoffMemberComponent implements OnInit {
  
  @Input() public activeMember;
  @Input() public memberDialogActive: boolean;

  constructor() { }

  ngOnInit() {

  }

  // Click on one of the users songs to see various tries, weather the songs is complete, when it was completed.
  // Be able to click checkoff on a song and pass that data to another component which will allow the partleader to checkoff that song for the user.
  // Possibly add a router for these components so that it pops up in the url as well.
  // Be able to add notes to a members song (update the song data structure for the user)

}
