import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardPartComparisonComponent } from './user-dashboard-part-comparison.component';

describe('UserDashboardPartComparisonComponent', () => {
  let component: UserDashboardPartComparisonComponent;
  let fixture: ComponentFixture<UserDashboardPartComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardPartComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardPartComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
