/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchresultlistComponent } from './searchresultlist.component';

describe('SearchresultlistComponent', () => {
  let component: SearchresultlistComponent;
  let fixture: ComponentFixture<SearchresultlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchresultlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchresultlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
