import { Thermostat } from "./thermostat.model";
import { UserRole } from "./user-role.enum";

export class User {
  ID: number;
  username: string;
  token: string;
  role: UserRole;
  thermostats: Thermostat[];
}
