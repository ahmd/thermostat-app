import { ThermostatReading } from "../models/thermostat-reading.model";
import { _thermostats } from "../_mockdata/thermostats.mock";

export let _thermostat_readings: ThermostatReading[] = [
  {
    ID: 1001,
    thermostat: _thermostats[0],
    temperature: 22,
    humidity: 38,
    battery_charge: 33,
  },
  {
    ID: 1011,
    thermostat: _thermostats[0],
    temperature: 23,
    humidity: 39,
    battery_charge: 34,
  },
  {
    ID: 1021,
    thermostat: _thermostats[0],
    temperature: 24,
    humidity: 39,
    battery_charge: 35,
  },
  {
    ID: 1031,
    thermostat: _thermostats[0],
    temperature: 23,
    humidity: 38,
    battery_charge: 36,
  },
  {
    ID: 1041,
    thermostat: _thermostats[0],
    temperature: 21,
    humidity: 38,
    battery_charge: 55,
  },
];
