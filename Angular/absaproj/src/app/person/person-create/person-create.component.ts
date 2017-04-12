import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service'
import { PersonService } from '../service/person.service'
import { ActivatedRoute, Router } from "@angular/router";
import { Person } from '../person'
import { Country } from '../country'

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
  , providers: [PersonService, CountryService]

})
export class PersonCreateComponent implements OnInit {
  person: Person;
  countries: Array<Country>;
  loading : boolean;
  
  constructor(private personService: PersonService, private activatedRoute: ActivatedRoute, private countryService: CountryService, private router: Router) { 
    this.loading = true;
  }

  ngOnInit() {
    this.countryService.getCountries().subscribe(
      res => {this.countries = res;
      this.loading = false;}
    );
    this.person = new Person("", "", "", 0, 0);
  }

  submit(): void {
    this.loading = true;
    this.personService.savePerson(this.person)
      .subscribe(p => {
        this.router.navigate(['/people']);
      })
  }
}
