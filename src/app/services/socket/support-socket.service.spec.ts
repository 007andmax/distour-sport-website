import { TestBed } from '@angular/core/testing';

import { SupportSocketService } from './support-socket.service';

describe('SupportSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupportSocketService = TestBed.get(SupportSocketService);
    expect(service).toBeTruthy();
  });
});
