import { TestBed } from '@angular/core/testing';

import { ContactDetailService } from './contact-detail.service';

describe('ContacDetailService', () => {
  let service: ContactDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
