import { Injectable } from "@angular/core";
import { of } from "rxjs";

import { _thermostats } from "../_mockdata/thermostats.mock";
import { HttpResponse } from "@angular/common/http";
import { Thermostat } from "../models/thermostat.model";
import { AuthenticationService } from "./authentication.service";
import { User } from "../models/user.model";
import { UserRole } from "../models/user-role.enum";

@Injectable({
  providedIn: "root",
})
export class ThermostatService {
  //used to get unique sequance id for adding new object
  private last_id = 7;
  currentUser: User;

  constructor(private authService: AuthenticationService) {
    this.authService.currentUser.subscribe((x) => (this.currentUser = x));
  }

  getAllThermostats() {
    let thermostats: Thermostat[] = _thermostats;
    if (this.currentUser.role == UserRole.OWNER) {
      thermostats = thermostats.filter((_thermostat) => {
        return this.currentUser.thermostat_ids.includes(_thermostat.ID);
      });
      return of(new HttpResponse({ status: 200, body: thermostats }));
    } else {
      return of(new HttpResponse({ status: 200, body: thermostats }));
    }
  }
  getThermostatById(ID: number) {
    let result = _thermostats.filter((_thermostat) => {
      if (this.currentUser.role == UserRole.OWNER) {
        return (
          _thermostat.ID == ID &&
          this.currentUser.thermostat_ids.includes(_thermostat.ID)
        );
      } else {
        return _thermostat.ID == ID;
      }
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
