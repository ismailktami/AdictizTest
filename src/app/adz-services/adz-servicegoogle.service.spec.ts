import { TestBed } from '@angular/core/testing';

import { AdzServicegoogleService } from './adz-servicegoogle.service';

describe('AdzServicegoogleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdzServicegoogleService = TestBed.get(AdzServicegoogleService);
    expect(service).toBeTruthy();
  });
});
