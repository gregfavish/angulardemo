import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "../service/authentication.service"
import { LoginDetails } from "../logindetails"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]

})
export class LoginComponent implements OnInit {
  logindetails: LoginDetails;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.logindetails = new LoginDetails()
  }

  submit(): void {
    this.authService.attemptLogin(this.logindetails).subscribe(res => {
      if (res) {
        this.authService.UserLoggedIn();
        this.router.navigate(['/people/Create']);
      }
      else {
        alert("Login failed for this username/password")
      }
    })

  }

}
