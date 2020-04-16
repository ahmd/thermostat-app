import { Injectable } from "@angular/core";
import { of } from "rxjs";

import { _thermostats } from "../_mockdata/thermostats.mock";
import { HttpResponse } from "@angular/common/http";
import { Thermostat } from "../models/thermostat.model";

@Injectable({
  providedIn: "root",
})
export class ThermostatService {
  //used to get unique sequance id for adding new object
  private last_id = 7;

  constructor() {}

  getAllThermostats() {
    return of(new HttpResponse({ status: 200, body: _thermostats }));
  }
  getThermostatById(ID: number) {
    let result = _thermostats.filter((_thermostat) => {
      return _thermostat.ID == ID;
    });

    let thermostat: Thermostat;
    if (result.length > 0) {
      thermostat = result[0];
    }
    return of(new HttpResponse({ status: 200, body: thermostat }));
  }
  addThermostat(thermostat: Thermostat) {
    this.last_id = this.last_id + 1;
    thermostat.ID = this.last_id;
    _thermostats.unshift(thermostat);
    return of(new HttpResponse({ status: 201, body: {} }));
  }
}
