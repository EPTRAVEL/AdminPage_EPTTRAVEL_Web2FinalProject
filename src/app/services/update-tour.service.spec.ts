import { TestBed } from '@angular/core/testing';

import { UpdateTourService } from './update-tour.service';

describe('UpdateTourService', () => {
  let service: UpdateTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
