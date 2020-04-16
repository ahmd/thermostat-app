import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";

import { _thermostats } from "../_mockdata/thermostats.mock";
import { HttpResponse } from "@angular/common/http";
import { Thermostat } from "../models/thermostat.model";

@Injectable({
  providedIn: "root",
})
export class ThermostatService {
  constructor() {}

  getAllThermostats() {
    return of(new HttpResponse({ status: 200, body: _thermostats }));
  }
}
