import { Injectable } from '@angular/core';
import { LoginDetails } from '../logindetails';
import { Http, Response } from '@angular/http';
import {AppSettings} from '../../shared/appSettings';

const LOGGED_IN_KEY: string = "loggedin";

@Injectable()
export class AuthenticationService {
  private loggedin: boolean = false;
  private apiaddress: string;

  constructor(private http: Http) {
  }

  attemptLogin(input: LoginDetails) {

    return this.http.post(AppSettings.API_ENDPOINT+"Account/Login", input, { withCredentials: true })
      .map((res: Response) => res.json());
  }

  UserLoggedIn() {
    localStorage.setItem(LOGGED_IN_KEY, "true");
  }

  UserLoggedOut() {
    localStorage.setItem(LOGGED_IN_KEY, "false");
  }


  isLoggedIn() {
   var result= localStorage.getItem(LOGGED_IN_KEY);
    return result == "true";
  }

  attemptLogout(){
    sessionStorage.removeItem('accessToken');
     return this.http.get(AppSettings.API_ENDPOINT+"Account/Logoff", { withCredentials: true })
      .map((res: Response) => res.json());
  }

}
