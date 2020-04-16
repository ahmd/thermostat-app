import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthenticationService } from "../services/authentication.service";
import { UserRole } from "../models/user-role.enum";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    let roles = route.data.roles as Array<UserRole>;

    if (currentUser) {
      if (roles.includes(currentUser.role)) {
        return true;
      } else {
        this.router.navigate(["/home"]);
        return false;
      }
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(["/login"]);
    return false;
  }
}
