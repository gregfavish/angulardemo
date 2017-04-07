import { Injectable } from '@angular/core';
import { LoginDetails } from '../logindetails';
import { Http, Response } from '@angular/http';

@Injectable()
export class AuthenticationService {
  private loggedin :boolean= false;
  private apiaddress: string;
  constructor(private http: Http) {
    this.apiaddress = 'http://localhost:51876/Account/Login'
  }

  attemptLogin(input: LoginDetails, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('POST', this.apiaddress, false);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.withCredentials = true;
    let success = false;
    xhr.onload = function () {
      // do something to response
            success = true;
          callback();
    };
          
            this.loggedin=success;

    xhr.send("Email=" + input.Email + "&Password=" + input.Password);
    
  }

  isLoggedIn(){
    return this.loggedin;
  }

}
