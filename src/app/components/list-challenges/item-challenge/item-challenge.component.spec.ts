import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemChallengeComponent } from './item-challenge.component';

describe('ItemChallengeComponent', () => {
  let component: ItemChallengeComponent;
  let fixture: ComponentFixture<ItemChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
