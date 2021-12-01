import { TestBed } from '@angular/core/testing';

import { MulticastingService } from './multicasting.service';

describe('MulticastingService', () => {
  let service: MulticastingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MulticastingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
