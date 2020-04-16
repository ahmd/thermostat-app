import { Address } from "./address.model";
import { ThermostatReading } from "./thermostat-reading.model";

export class Thermostat {
  ID: number;
  household_token: string;
  location: Address;
  last_reading: ThermostatReading;
}
