import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportSuccessComponent } from './sport-success.component';

describe('SportSuccessComponent', () => {
  let component: SportSuccessComponent;
  let fixture: ComponentFixture<SportSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
