import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermostatDetailsComponent } from './thermostat-details.component';

describe('ThermostatDetailsComponent', () => {
  let component: ThermostatDetailsComponent;
  let fixture: ComponentFixture<ThermostatDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermostatDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermostatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
