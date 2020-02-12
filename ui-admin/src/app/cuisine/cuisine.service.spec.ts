import { TestBed } from '@angular/core/testing';

import { CuisineService } from './cuisine.service';

describe('CuisineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuisineService = TestBed.get(CuisineService);
    expect(service).toBeTruthy();
  });
});
