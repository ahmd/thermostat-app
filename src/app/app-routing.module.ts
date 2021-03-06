import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ThermostatDetailsComponent } from "./thermostat-details/thermostat-details.component";
import { AddThermostatComponent } from "./add-thermostat/add-thermostat.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./shared/guards/auth.guards";
import { UserRole } from "./shared/models/user-role.enum";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { roles: [UserRole.MANAGER, UserRole.OWNER] },
  },
  {
    path: "thermostat-readings/:thermostat_id",
    component: ThermostatDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: [UserRole.MANAGER, UserRole.OWNER] },
  },
  {
    path: "add-thermostat",
    component: AddThermostatComponent,
    canActivate: [AuthGuard],
    data: { roles: [UserRole.MANAGER] },
  },
  {
    path: "login",
    component: LoginComponent,
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
