import { TestBed } from '@angular/core/testing';

import { UserSocketService } from './user-socket.service';

describe('UserSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSocketService = TestBed.get(UserSocketService);
    expect(service).toBeTruthy();
  });
});
