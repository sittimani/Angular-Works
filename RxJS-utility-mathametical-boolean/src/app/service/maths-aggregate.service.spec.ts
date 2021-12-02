import { TestBed } from '@angular/core/testing';

import { MathsAggregateService } from './maths-aggregate.service';

describe('MathsAggregateService', () => {
  let service: MathsAggregateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathsAggregateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
