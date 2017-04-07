import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "./authentication/service/authentication.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logout(): void {
    this.authService.attemptLogout().subscribe(res => {
      if (res) {
        this.authService.UserLoggedOut();
        this.router.navigate(['/login']);
      }
      else {
        alert("Logout failed failed")
      }
    })

  }
}

