import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ThermostatService } from "../shared/services/thermostat.service";
import { Thermostat } from "../shared/models/thermostat.model";
import { Router } from "@angular/router";
import { ThermostatReading } from "../shared/models/thermostat-reading.model";

@Component({
  selector: "app-add-thermostat",
  templateUrl: "./add-thermostat.component.html",
  styleUrls: ["./add-thermostat.component.scss"],
})
export class AddThermostatComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private thermostatService: ThermostatService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reactiveForm();
  }
  reactiveForm() {
    this.myForm = this.formBuilder.group({
      household_token: ["", [Validators.required]],
      country: [""],
      city: [""],
      line1: [""],
      line2: [""],
      postalCode: [""],
    });
  }
  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  };

  submitForm() {
    let thermostat: Thermostat = {
      ID: this.randomID(),
      household_token: this.myForm.value.household_token,
      location: {
        city: this.myForm.value.city,
        country: this.myForm.value.country,
        line1: this.myForm.value.line1,
        line2: this.myForm.value.line2,
        postalCode: this.myForm.value.postalCode,
      },
      last_reading: null,
    };
    this.thermostatService.addThermostat(thermostat).subscribe((data) => {
      this.router.navigate(["/home"]);
    });
  }
  randomID() {
    let num = Math.random().toString(36).substr(2, 9);
    return parseInt(num);
  }
}
