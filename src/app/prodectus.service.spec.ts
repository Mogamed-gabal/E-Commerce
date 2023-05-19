import { TestBed } from '@angular/core/testing';

import { ProdectusService } from './prodectus.service';

describe('ProdectusService', () => {
  let service: ProdectusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdectusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
