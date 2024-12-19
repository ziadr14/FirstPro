import { TestBed } from '@angular/core/testing';

import { CartServesService } from './cart-serves.service';

describe('CartServesService', () => {
  let service: CartServesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartServesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
