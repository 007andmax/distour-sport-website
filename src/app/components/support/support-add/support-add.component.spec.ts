import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportAddComponent } from './support-add.component';

describe('SupportAddComponent', () => {
  let component: SupportAddComponent;
  let fixture: ComponentFixture<SupportAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
