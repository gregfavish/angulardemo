import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Country} from '../country'
import {Observable} from 'rxjs/Rx';
import {CountryMapperService} from './countrymapper'
import {AppSettings} from '../../shared/appSettings';

@Injectable()
export class CountryService {

  constructor (
    private http: Http,
    private countrymapper : CountryMapperService
  ) {
  }

   getCountries() : Observable <Array<Country>> {
    return this.http.get(AppSettings.API_ENDPOINT + "api/Countries",{withCredentials: true})
    .map((res:Response) => this.countrymapper.parseArray(res.json()));
  }

}
