import { TestBed } from '@angular/core/testing';

import { BartService } from './bart.service';

describe('BartService', () => {
  let service: BartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
