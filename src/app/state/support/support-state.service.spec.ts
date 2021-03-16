import { TestBed } from '@angular/core/testing';

import { SupportStateService } from './support-state.service';

describe('SupportStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupportStateService = TestBed.get(SupportStateService);
    expect(service).toBeTruthy();
  });
});
