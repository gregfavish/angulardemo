import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {

  private apiaddress :string;
  constructor (
    private http: Http
    
  ) {
    this.apiaddress = 'http://localhost:51876/api/People/'
  }

   getPeople() : any {
    return this.http.get(this.apiaddress)
    .map((res:Response) => res.json());
  }

    getPerson(id :number ) : any {
    return this.http.get(this.apiaddress+id)
    .map((res:Response) => res.json());
  }

  savePerson (person :any){
return this.http.post(this.apiaddress,person)
    .map((res:Response) => res.json());
}

}
