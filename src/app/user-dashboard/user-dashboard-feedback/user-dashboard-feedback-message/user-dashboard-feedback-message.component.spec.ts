import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardFeedbackMessageComponent } from './user-dashboard-feedback-message.component';

describe('UserDashboardFeedbackMessageComponent', () => {
  let component: UserDashboardFeedbackMessageComponent;
  let fixture: ComponentFixture<UserDashboardFeedbackMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardFeedbackMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardFeedbackMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
