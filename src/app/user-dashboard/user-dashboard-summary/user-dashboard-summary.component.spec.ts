import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardSummaryComponent } from './user-dashboard-summary.component';

describe('UserDashboardSummaryComponent', () => {
  let component: UserDashboardSummaryComponent;
  let fixture: ComponentFixture<UserDashboardSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
