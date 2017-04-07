import { Injectable } from '@angular/core';
import { Country } from '../country';

@Injectable()
export class CountryMapperService {

    parseArray(jsonData): Country[] {
        var countries = new Array<Country>();
            var data = jsonData;
            for (var i = 0; i < data.length; i++) {
                countries.push(this.parse(data[i]));
            }
            return countries;
    };

  

    parse(data: any): Country {
        if (!data)
            throw Error("Response Data Malformed");

        var country: Country = new Country(
            data.name,
            data.id,
        );
        return country;
    }
}
