import { TestBed } from '@angular/core/testing';

import { PrintCheckService } from './print-check.service';

describe('PrintCheckService', () => {
  let service: PrintCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
