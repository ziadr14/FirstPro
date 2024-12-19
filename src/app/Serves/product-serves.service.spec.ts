import { TestBed } from '@angular/core/testing';

import { ProductServesService } from './product-serves.service';

describe('ProductServesService', () => {
  let service: ProductServesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
