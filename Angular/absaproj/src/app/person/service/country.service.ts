import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryService {

  private apiaddress :string;
  constructor (
    private http: Http
    
  ) {
    this.apiaddress = 'http://localhost:51876/api/Countries/'
  }

   getCountries() : any {
    return this.http.get(this.apiaddress)
    .map((res:Response) => res.json());
  }

}
