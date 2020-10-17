import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportFailedComponent } from './sport-failed.component';

describe('SportFailedComponent', () => {
  let component: SportFailedComponent;
  let fixture: ComponentFixture<SportFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
