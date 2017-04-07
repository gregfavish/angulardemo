import { Injectable } from '@angular/core';
import { Person } from '../person';

@Injectable()
export class PersonMapperService {

    parseArray(jsonData): Person[] {
        var people = new Array<Person>();
            var data = jsonData;
            for (var i = 0; i < data.length; i++) {
                people.push(this.parse(data[i]));
            }
            return people;
    };

  

    parse(data: any): Person {
        if (!data)
            throw Error("Response Data Malformed");

        var person: Person = new Person(
            data.name,
            data.surname,
            data.countryText,
            data.countryId,
            data.personId
        );
        return person;
    }
}
