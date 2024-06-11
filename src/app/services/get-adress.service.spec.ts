import { TestBed } from '@angular/core/testing';

import { GetAdressService } from './get-adress.service';

describe('GetAdressService', () => {
  let service: GetAdressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAdressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
