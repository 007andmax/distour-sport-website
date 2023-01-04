import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietExerciseComponent } from './diet-exercise.component';

describe('DietExerciseComponent', () => {
  let component: DietExerciseComponent;
  let fixture: ComponentFixture<DietExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
