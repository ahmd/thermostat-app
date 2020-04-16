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
    ID: 1000,
    thermostat: _thermostats[0],
    temperature: 23,
    humidity: 39,
    battery_charge: 34,
  },
  {
    ID: 999,
    thermostat: _thermostats[0],
    temperature: 24,
    humidity: 39,
    battery_charge: 35,
  },
  {
    ID: 998,
    thermostat: _thermostats[0],
    temperature: 23,
    humidity: 38,
    battery_charge: 36,
  },
  {
    ID: 997,
    thermostat: _thermostats[0],
    temperature: 21,
    humidity: 38,
    battery_charge: 55,
  },
  {
    ID: 1002,
    thermostat: _thermostats[1],
    temperature: 21,
    humidity: 36,
    battery_charge: 55,
  },
  {
    ID: 1003,
    thermostat: _thermostats[2],
    temperature: 20,
    humidity: 44,
    battery_charge: 87,
  },
  {
    ID: 1004,
    thermostat: _thermostats[3],
    temperature: 26,
    humidity: 41,
    battery_charge: 98,
  },
  {
    ID: 1005,
    thermostat: _thermostats[4],
    temperature: 18,
    humidity: 30,
    battery_charge: 10,
  },
  {
    ID: 1006,
    thermostat: _thermostats[5],
    temperature: 28,
    humidity: 45,
    battery_charge: 48,
  },
  {
    ID: 1007,
    thermostat: _thermostats[6],
    temperature: 20,
    humidity: 24,
    battery_charge: 68,
  },
];
