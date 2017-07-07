import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoffMemberComponent } from './checkoff-member.component';

describe('CheckoffMemberComponent', () => {
  let component: CheckoffMemberComponent;
  let fixture: ComponentFixture<CheckoffMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoffMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoffMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
