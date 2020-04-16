import { TestBed } from '@angular/core/testing';

import { ThermostatReadingService } from './thermostat-reading.service';

describe('ThermostatReadingService', () => {
  let service: ThermostatReadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThermostatReadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
