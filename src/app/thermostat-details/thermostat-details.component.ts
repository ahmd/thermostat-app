import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ThermostatService } from "../shared/services/thermostat.service";
import { Thermostat } from "../shared/models/thermostat.model";
import { PageEvent } from "@angular/material/paginator";
import { ThermostatReading } from "../shared/models/thermostat-reading.model";
import { ThermostatReadingService } from "../shared/services/thermostat-reading.service";

@Component({
  selector: "app-thermostat-details",
  templateUrl: "./thermostat-details.component.html",
  styleUrls: ["./thermostat-details.component.scss"],
})
export class ThermostatDetailsComponent implements OnInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
  displayedColumns: string[] = [
    "ID",
    "temperature",
    "humidity",
    "battery_charge",
  ];

  thermostat_id: any;
  thermostat: Thermostat;
  thermostat_readings: ThermostatReading[];

  constructor(
    private route: ActivatedRoute,
    private thermostatService: ThermostatService,
    private readingService: ThermostatReadingService
  ) {}

  ngOnInit(): void {
    this.thermostat_id = this.route.snapshot.paramMap.get("thermostat_id");
    this.thermostatService
      .getThermostatById(this.thermostat_id)
      .subscribe((data) => {
        if (data.body) {
          this.thermostat = data.body;
        } else {
          console.log("errorssss");
        }
      });
    this.readingService
      .getThermostatReadings(this.thermostat_id)
      .subscribe((data) => {
        if (data.body) {
          this.thermostat_readings = data.body;
        } else {
          console.log("errorssss");
        }
      });
  }
  changePage(event?: PageEvent) {
    return event;
  }
}
