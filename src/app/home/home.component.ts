import { Component, OnInit } from "@angular/core";
import { Thermostat } from "../shared/models/thermostat.model";
import { PageEvent } from "@angular/material/paginator";
import { ThermostatService } from "../shared/services/thermostat.service";
import { map, catchError } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  thermostats: Thermostat[];

  displayedColumns: string[] = [
    "ID",
    "household_token",
    "temperature",
    "humidity",
    "battery_charge",
    "location",
    "actions",
  ];
  constructor(private thermostatService: ThermostatService) {}

  ngOnInit(): void {
    this.getThermostats();
  }

  getThermostats() {
    this.thermostatService.getAllThermostats().subscribe((data) => {
      this.thermostats = data.body;
    });
  }
}
