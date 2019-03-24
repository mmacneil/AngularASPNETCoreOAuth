import { TestBed } from '@angular/core/testing';

import { TopSecretService } from './top-secret.service';

describe('TopSecretService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopSecretService = TestBed.get(TopSecretService);
    expect(service).toBeTruthy();
  });
});
