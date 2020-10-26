import { TestBed } from '@angular/core/testing';

import { ChallengeSocketService } from './challenge-socket.service';

describe('ChallengeSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChallengeSocketService = TestBed.get(ChallengeSocketService);
    expect(service).toBeTruthy();
  });
});
