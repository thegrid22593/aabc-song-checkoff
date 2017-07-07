import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardFeedbackComponent } from './user-dashboard-feedback.component';

describe('UserDashboardFeedbackComponent', () => {
  let component: UserDashboardFeedbackComponent;
  let fixture: ComponentFixture<UserDashboardFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
