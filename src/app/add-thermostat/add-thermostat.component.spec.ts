import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThermostatComponent } from './add-thermostat.component';

describe('AddThermostatComponent', () => {
  let component: AddThermostatComponent;
  let fixture: ComponentFixture<AddThermostatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddThermostatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThermostatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
