import { TestBed } from '@angular/core/testing';

import { JoinCreationService } from './join-creation.service';

describe('JoinCreationService', () => {
  let service: JoinCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoinCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
