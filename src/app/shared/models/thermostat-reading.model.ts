import { Thermostat } from "./thermostat.model";

export class ThermostatReading {
  ID: number;
  thermostat: Thermostat;
  temperature: number;
  humidity: number;
  battery_charge: number;
}
