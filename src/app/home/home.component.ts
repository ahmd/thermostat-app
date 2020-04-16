import { Component, OnInit } from "@angular/core";
import { Thermostat } from "../shared/models/thermostat.model";
import { ThermostatService } from "../shared/services/thermostat.service";

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

    //pulling randomized data each 10s
    setInterval(() => {
      this.getThermostats();
    }, 10000);
  }

  getThermostats() {
    this.thermostatService.getAllThermostats().subscribe((data) => {
      this.thermostats = data.body;
    });
  }
}
