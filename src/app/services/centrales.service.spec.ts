import { TestBed } from '@angular/core/testing';

import { CentralesService } from './centrales.service';

describe('CentralesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CentralesService = TestBed.get(CentralesService);
    expect(service).toBeTruthy();
  });
});
