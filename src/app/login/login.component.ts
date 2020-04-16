import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../shared/services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initFormBuilder();
  }
  initFormBuilder() {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required]],
    });
  }
  public errorHandling = (control: string, error: string) => {
    return this.loginForm.controls[control].hasError(error);
  };

  submitForm() {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value.username)
        .subscribe((data) => {
          if (data.body) {
            this.router.navigate(["/home"]);
          } else {
            this.errorMessage = "username not found !";
          }
        });
    }
  }
}
