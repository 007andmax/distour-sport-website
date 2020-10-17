import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemChallengeComponent } from './add-item-challenge.component';

describe('AddItemChallengeComponent', () => {
  let component: AddItemChallengeComponent;
  let fixture: ComponentFixture<AddItemChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
