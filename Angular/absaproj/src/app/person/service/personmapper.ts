import { Injectable } from '@angular/core';
import { Person } from '../person';

@Injectable()
export class PersonMapperService {

    parseArray(jsonData): Person[] {
        var posts = new Array<Person>();
            var data = jsonData;
            for (var i = 0; i < data.length; i++) {
                posts.push(this.parse(data[i]));
            }
            return posts;
    };

  

    parse(data: any): Person {
        if (!data)
            throw Error("Response Data Malformed");

        var post: Person = new Person(
            data.name,
            data.surname,
            data.countryText,
            data.countryId,
            data.personId
        );
        return post;
    }
}
