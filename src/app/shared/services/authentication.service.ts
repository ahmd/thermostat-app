import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { User } from "../models/user.model";
import { _users } from "../_mockdata/users.mock";
import { HttpResponse } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string) {
    let result = _users.filter((user) => {
      return user.username == username;
    });
    let user: User;
    if (result.length > 0) {
      user = result[0];
      this.currentUserSubject.next(user);
    }
    return of(new HttpResponse({ status: 200, body: user }));
  }

  logout() {
    this.currentUserSubject.next(null);
  }
}
