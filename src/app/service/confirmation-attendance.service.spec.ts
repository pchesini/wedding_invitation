import { TestBed } from '@angular/core/testing';

import { ConfirmationAttendanceService } from './confirmation-attendance.service';

describe('ConfirmationAttendanceService', () => {
  let service: ConfirmationAttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmationAttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
