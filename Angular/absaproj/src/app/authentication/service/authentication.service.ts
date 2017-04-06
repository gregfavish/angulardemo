import { Injectable } from '@angular/core';
import { LoginDetails } from '../logindetails';
import { Http, Response } from '@angular/http';

@Injectable()
export class AuthenticationService {
private apiaddress:string;
  constructor(private http: Http) { 
        this.apiaddress = 'http://localhost:51876/Account/LoginApi'
  }

  attemptLogin(input : LoginDetails){
     return this.http.post(this.apiaddress,input)
    .map((res:Response) => res.json());
  }
}
