import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
  length: number;
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
  thermostat_readings: ThermostatReading[] = [];

  constructor(
    private route: ActivatedRoute,
    private thermostatService: ThermostatService,
    private readingService: ThermostatReadingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.thermostat_id = this.route.snapshot.paramMap.get("thermostat_id");
    this.getThermostatDetails();
    this.getThermostatHistory(0, this.pageSize);
  }

  getThermostatDetails() {
    this.thermostatService
      .getThermostatById(this.thermostat_id)
      .subscribe((data) => {
        if (data.body) {
          this.thermostat = data.body;
        } else {
          this.goBack();
        }
      });
  }

  getThermostatHistory(pageIndex: number, pageSize: number) {
    this.readingService
      .getThermostatReadings(this.thermostat_id, pageIndex, pageSize)
      .subscribe((data) => {
        if (data.body) {
          this.length = data.body.total;
          this.thermostat_readings = data.body.readings;
        }
      });
  }

  changePage(event?: PageEvent) {
    this.getThermostatHistory(event.pageIndex, event.pageSize);
    return event;
  }

  goBack() {
    this.router.navigate(["/home"]);
  }
}
