import { TestBed, inject } from '@angular/core/testing';

import { GetGithubUserServicesService } from './get-github-user-services.service';

describe('GetGithubUserServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetGithubUserServicesService]
    });
  });

  it('should be created', inject([GetGithubUserServicesService], (service: GetGithubUserServicesService) => {
    expect(service).toBeTruthy();
  }));
});
