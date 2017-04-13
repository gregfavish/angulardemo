import { Injectable } from '@angular/core';
import { Http, Response ,} from '@angular/http';
import 'rxjs/add/operator/map';
import {Person} from '../person'
import {PersonMapperService} from './personmapper'
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PersonService {
private apiaddress :string;

  constructor (
    private http: Http, private mapper :PersonMapperService) {
      this.apiaddress = 'http://absaproj20170413122357.azurewebsites.net/api/People/'
  }

   getPeople() : Observable<Array<Person>>  {
    return this.http.get(this.apiaddress,{withCredentials: true})
    .map((res:Response) => this.mapper.parseArray(res.json()));
  }

    getPerson(id :number ) : Observable<Person> {
    return this.http.get(this.apiaddress+id,{withCredentials: true})
    .map((res:Response) =>  this.mapper.parse(res.json()));
  }

  savePerson (person :Person){
return this.http.post(this.apiaddress,person,{withCredentials: true})
    .map((res:Response) => res.json());
}

}
