import { Injectable } from '@angular/core';
import { LoginDetails } from '../logindetails';
import { Http, Response } from '@angular/http';

@Injectable()
export class AuthenticationService {
  private loggedin: boolean = false;
  private apiaddress: string;

  constructor(private http: Http) {
    this.apiaddress = 'http://localhost:51876/Account/'
  }

  attemptLogin(input: LoginDetails) {

    return this.http.post(this.apiaddress+"Login", input, { withCredentials: true })
      .map((res: Response) => res.json());
  }

  UserLoggedIn() {
    localStorage.setItem('loggedin', "true");
  }

  UserLoggedOut() {
    localStorage.setItem('loggedin', "false");
  }


  isLoggedIn() {
   var result= localStorage.getItem('loggedin');
    return result == "true";
  }

  attemptLogout(){
    sessionStorage.removeItem('accessToken');
     return this.http.get(this.apiaddress+"Logoff", { withCredentials: true })
      .map((res: Response) => res.json());
  }

}
