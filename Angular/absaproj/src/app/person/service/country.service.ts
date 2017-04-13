import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Country} from '../country'
import {Observable} from 'rxjs/Rx';
import {CountryMapperService} from './countrymapper'

@Injectable()
export class CountryService {
private apiaddress :string;

  constructor (
    private http: Http,
    private countrymapper : CountryMapperService
  ) {
     this.apiaddress = 'http://absaproj20170413122357.azurewebsites.net/api/Countries/'
  }

   getCountries() : Observable <Array<Country>> {
    return this.http.get(this.apiaddress,{withCredentials: true})
    .map((res:Response) => this.countrymapper.parseArray(res.json()));
  }

}
