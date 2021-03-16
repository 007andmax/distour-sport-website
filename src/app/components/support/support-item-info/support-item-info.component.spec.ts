import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportItemInfoComponent } from './support-item-info.component';

describe('SupportItemInfoComponent', () => {
  let component: SupportItemInfoComponent;
  let fixture: ComponentFixture<SupportItemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportItemInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
