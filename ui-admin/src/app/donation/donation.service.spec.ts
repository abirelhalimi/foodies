import { TestBed } from '@angular/core/testing';

import { DonationService } from './donation.service';

describe('DonationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonationService = TestBed.get(DonationService);
    expect(service).toBeTruthy();
  });
});
