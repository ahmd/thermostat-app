import { Injectable } from "@angular/core";
import { _thermostat_readings } from "../_mockdata/thermostat-readings.mock";
import { ThermostatReading } from "../models/thermostat-reading.model";
import { of } from "rxjs";
import { HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ThermostatReadingService {
  constructor() {}
  getThermostatReadings(thermostat_id: number) {
    let result = _thermostat_readings.filter((_readings) => {
      return _readings.thermostat.ID == thermostat_id;
    });

    let thermostatReading: ThermostatReading[];
    if (result.length > 0) {
      thermostatReading = result;
    }
    return of(new HttpResponse({ status: 200, body: thermostatReading }));
  }
}
