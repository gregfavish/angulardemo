import { Injectable } from '@angular/core';
import { Http, Response ,} from '@angular/http';
import 'rxjs/add/operator/map';
import {Person} from '../person'
import {PersonMapperService} from './personmapper'
import {Observable} from 'rxjs/Rx';
import {AppSettings} from '../../shared/appSettings';

@Injectable()
export class PersonService {

  constructor (
    private http: Http, private mapper :PersonMapperService) {
  }

   getPeople() : Observable<Array<Person>>  {
    return this.http.get(AppSettings.API_ENDPOINT+"api/People",{withCredentials: true})
    .map((res:Response) => this.mapper.parseArray(res.json()));
  }

    getPerson(id :number ) : Observable<Person> {
    return this.http.get(AppSettings.API_ENDPOINT+"api/People/"+id,{withCredentials: true})
    .map((res:Response) =>  this.mapper.parse(res.json()));
  }

  savePerson (person :Person){
return this.http.post(AppSettings.API_ENDPOINT+"api/People",person,{withCredentials: true})
    .map((res:Response) => res.json());
}

}
