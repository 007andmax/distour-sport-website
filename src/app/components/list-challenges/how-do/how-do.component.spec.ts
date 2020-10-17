import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDoComponent } from './how-do.component';

describe('HowDoComponent', () => {
  let component: HowDoComponent;
  let fixture: ComponentFixture<HowDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
