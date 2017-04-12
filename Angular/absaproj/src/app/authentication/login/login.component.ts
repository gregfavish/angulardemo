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
  loginFailed : boolean = false;
  loading: boolean;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.logindetails = new LoginDetails()
    this.loading=false;
  }

  submit(): void {
     this.loginFailed = false;
    this.loading=true;

    this.authService.attemptLogin(this.logindetails).subscribe(res => {
          this.loading=false;

      if (res) {
        this.authService.UserLoggedIn();
        this.router.navigate(['/people/Create']);
      }
      else {
        this.loginFailed = true;
      }
    })

  }

}
