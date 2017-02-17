/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SoloSongsComponent } from './solo-songs.component';

describe('SoloSongsComponent', () => {
  let component: SoloSongsComponent;
  let fixture: ComponentFixture<SoloSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
