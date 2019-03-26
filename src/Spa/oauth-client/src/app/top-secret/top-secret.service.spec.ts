import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigService } from '../shared/config.service';

import { TopSecretService } from './top-secret.service';

describe('TopSecretService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: [HttpClientTestingModule],
    providers: [ ConfigService ]
  }));

  it('should be created', () => {
    const service: TopSecretService = TestBed.get(TopSecretService);
    expect(service).toBeTruthy();
  });
});
