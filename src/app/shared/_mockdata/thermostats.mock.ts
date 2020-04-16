import { Thermostat } from "../models/thermostat.model";

export let _thermostats: Thermostat[] = [
  {
    ID: 7,
    household_token: "TH568",
    location: {
      city: "North Carolina",
      country: "United States",
      line1: "High Point",
      line2: "2474 Jones Avenue",
      postalCode: "27260",
    },
    last_reading: {
      ID: 1001,
      thermostat: null,
      temperature: 22,
      humidity: 38,
      battery_charge: 33,
    },
  },
  {
    ID: 6,
    household_token: "TH242",
    location: {
      city: "Illinois",
      country: "United States",
      line1: "Lombard",
      line2: "1240  West Drive",
      postalCode: "60148",
    },
    last_reading: {
      ID: 1002,
      thermostat: null,
      temperature: 21,
      humidity: 36,
      battery_charge: 55,
    },
  },
  {
    ID: 5,
    household_token: "TH303",
    location: {
      city: "Minnesota",
      country: "United States",
      line1: "Fosston",
      line2: "3744  Ferrell Street",
      postalCode: "56542",
    },
    last_reading: {
      ID: 1003,
      thermostat: null,
      temperature: 20,
      humidity: 44,
      battery_charge: 87,
    },
  },
  {
    ID: 4,
    household_token: "TH494",
    location: {
      city: "North Carolina",
      country: "United States",
      line1: "Charlotte",
      line2: "2202  Snyder Avenue",
      postalCode: "28208",
    },
    last_reading: {
      ID: 1004,
      thermostat: null,
      temperature: 26,
      humidity: 41,
      battery_charge: 98,
    },
  },
  {
    ID: 3,
    household_token: "TH515",
    location: {
      city: "Idaho",
      country: "United States",
      line1: "Boise",
      line2: "4315  Poplar Chase Lane",
      postalCode: "83702",
    },
    last_reading: {
      ID: 1005,
      thermostat: null,
      temperature: 18,
      humidity: 30,
      battery_charge: 10,
    },
  },
  {
    ID: 2,
    household_token: "TH689",
    location: {
      city: "Arkansas",
      country: "United States",
      line1: "Crossett",
      line2: "2817  Fittro Street",
      postalCode: "71635",
    },
    last_reading: {
      ID: 1006,
      thermostat: null,
      temperature: 28,
      humidity: 45,
      battery_charge: 48,
    },
  },
  {
    ID: 1,
    household_token: "TH711",
    location: {
      city: "Arizona",
      country: "United States",
      line1: "Tempe",
      line2: "1554  Dye Street",
      postalCode: "85281",
    },
    last_reading: {
      ID: 1007,
      thermostat: null,
      temperature: 20,
      humidity: 24,
      battery_charge: 68,
    },
  },
];
