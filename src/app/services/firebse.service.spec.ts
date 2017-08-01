import { TestBed, inject } from '@angular/core/testing';

import { FirebseService } from './firebse.service';

describe('FirebseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebseService]
    });
  });

  it('should be created', inject([FirebseService], (service: FirebseService) => {
    expect(service).toBeTruthy();
  }));
});
