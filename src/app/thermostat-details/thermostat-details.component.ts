import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ThermostatService } from "../shared/services/thermostat.service";
import { Thermostat } from "../shared/models/thermostat.model";

@Component({
  selector: "app-thermostat-details",
  templateUrl: "./thermostat-details.component.html",
  styleUrls: ["./thermostat-details.component.scss"],
})
export class ThermostatDetailsComponent implements OnInit {
  thermostat_id: any;
  thermostat: Thermostat;

  constructor(private route: ActivatedRoute, private api: ThermostatService) {}

  ngOnInit(): void {
    this.thermostat_id = this.route.snapshot.paramMap.get("thermostat_id");
    this.api.getThermostatById(this.thermostat_id).subscribe((data) => {
      if (data.body) {
        this.thermostat = data.body;
      } else {
        console.log("errorssss");
      }
    });
  }
}
