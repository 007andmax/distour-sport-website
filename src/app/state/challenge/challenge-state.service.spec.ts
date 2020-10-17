import { TestBed } from '@angular/core/testing';

import { ChallengeStateService } from './challenge-state.service';

describe('ChallengeStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChallengeStateService = TestBed.get(ChallengeStateService);
    expect(service).toBeTruthy();
  });
});
