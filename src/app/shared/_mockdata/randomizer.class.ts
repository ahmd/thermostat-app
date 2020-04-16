import { Thermostat } from "../models/thermostat.model";

export class Randomizer {
  change(thermostat: Thermostat) {
    if (thermostat.last_reading) {
      thermostat.last_reading.temperature = this.randomIntFromInterval(22, 30);
      thermostat.last_reading.humidity = this.randomIntFromInterval(10, 40);
      thermostat.last_reading.battery_charge =
        thermostat.last_reading.battery_charge == 10
          ? thermostat.last_reading.battery_charge
          : thermostat.last_reading.battery_charge - 1;
    }
    return thermostat;
  }
  private randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
