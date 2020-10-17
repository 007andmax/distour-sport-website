import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoChallengeComponent } from './info-challenge.component';

describe('InfoChallengeComponent', () => {
  let component: InfoChallengeComponent;
  let fixture: ComponentFixture<InfoChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
