import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportFilterComponent } from './support-filter.component';

describe('SupportFilterComponent', () => {
  let component: SupportFilterComponent;
  let fixture: ComponentFixture<SupportFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
