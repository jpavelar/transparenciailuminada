import { TestBed } from '@angular/core/testing';

import { APIComunicaService } from './api-comunica.service';

describe('APIComunicaService', () => {
  let service: APIComunicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIComunicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
