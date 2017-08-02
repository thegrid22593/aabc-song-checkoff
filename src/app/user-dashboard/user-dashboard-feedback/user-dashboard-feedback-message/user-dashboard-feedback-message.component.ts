import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-dashboard-feedback-message',
  templateUrl: './user-dashboard-feedback-message.component.html',
  styleUrls: ['./user-dashboard-feedback-message.component.scss']
})
export class UserDashboardFeedbackMessageComponent implements OnInit {
  @Input() public activeNote;
  constructor() { }

  ngOnInit() {
  }

}
