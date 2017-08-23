import { TestBed, inject } from '@angular/core/testing';

import { GetFirebaseDataService } from './get-firebase-data.service';

describe('GetFirebaseDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetFirebaseDataService]
    });
  });

  it('should be created', inject([GetFirebaseDataService], (service: GetFirebaseDataService) => {
    expect(service).toBeTruthy();
  }));
});
