import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqGeneralComponent } from './faq-general.component';

describe('FaqGeneralComponent', () => {
  let component: FaqGeneralComponent;
  let fixture: ComponentFixture<FaqGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
