import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoffComponent } from './checkoff.component';

describe('CheckoffComponent', () => {
  let component: CheckoffComponent;
  let fixture: ComponentFixture<CheckoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
