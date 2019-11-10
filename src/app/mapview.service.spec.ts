import { TestBed } from '@angular/core/testing';

import { MapviewService } from './mapview.service';

describe('MapviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapviewService = TestBed.get(MapviewService);
    expect(service).toBeTruthy();
  });
});
