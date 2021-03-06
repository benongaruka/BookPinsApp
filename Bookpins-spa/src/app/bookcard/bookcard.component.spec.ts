/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookcardComponent } from './bookcard.component';

describe('BookcardComponent', () => {
  let component: BookcardComponent;
  let fixture: ComponentFixture<BookcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
