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
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

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
  constructor(private api: ThermostatService) {}

  ngOnInit(): void {
    this.api.getAllThermostats().subscribe((data) => {
      this.thermostats = data.body;
      console.log(this.thermostats);
    });
  }

  changePage(event?: PageEvent) {
    return event;
  }
}
