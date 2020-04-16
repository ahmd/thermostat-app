import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ThermostatDetailsComponent } from "./thermostat-details/thermostat-details.component";
import { AddThermostatComponent } from "./add-thermostat/add-thermostat.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "thermostat-readings/:thermostat_id",
    component: ThermostatDetailsComponent,
  },
  {
    path: "add-thermostat",
    component: AddThermostatComponent,
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
