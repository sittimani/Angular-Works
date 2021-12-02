import { TestBed } from '@angular/core/testing';

import { ConditionalBooleanService } from './conditional-boolean.service';

describe('ConditionalBooleanService', () => {
  let service: ConditionalBooleanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConditionalBooleanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
