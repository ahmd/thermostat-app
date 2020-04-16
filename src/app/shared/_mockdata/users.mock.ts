import { User } from "../models/user.model";
import { UserRole } from "../models/user-role.enum";

export let _users: User[] = [
  {
    ID: 1,
    username: "manager",
    token: "DYMA2ejwvJum6DiAml7V",
    role: UserRole.MANAGER,
    thermostat_ids: [],
  },
  {
    ID: 2,
    username: "owner",
    token: "RJViaCuAyg0hqUM28eqi",
    role: UserRole.OWNER,
    thermostat_ids: [7, 6],
  },
];
