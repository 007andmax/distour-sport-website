import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqOrdersComponent } from './faq-orders.component';

describe('FaqOrdersComponent', () => {
  let component: FaqOrdersComponent;
  let fixture: ComponentFixture<FaqOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
