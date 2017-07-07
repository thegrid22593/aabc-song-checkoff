import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoffSongComponent } from './checkoff-song.component';

describe('CheckoffSongComponent', () => {
  let component: CheckoffSongComponent;
  let fixture: ComponentFixture<CheckoffSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoffSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoffSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
