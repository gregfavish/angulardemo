import { Component, OnInit } from '@angular/core';
import { PersonService } from '../service/person.service'
import { CountryService } from '../service/country.service'
import { Person } from '../person'
import { Country } from '../country'

import { ActivatedRoute, Router } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
  , providers: [PersonService, CountryService]

})
export class PersonEditComponent implements OnInit {

  person: Person;
  countries: Array<Country>;
  countiresLoading: boolean;
  peopleLoading: boolean;

  constructor(private personService: PersonService, private activatedRoute: ActivatedRoute, private countryService: CountryService, private router: Router
  ) { this.peopleLoading = true; this.countiresLoading = true; }

  ngOnInit() {
    this.countryService.getCountries().subscribe(
      res => {this.countries = res;
              this.countiresLoading= false}
    );

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this.personService.getPerson(id)
        .subscribe(p => {
          this.person = p;
          this.peopleLoading = false;
        })
    });
  }

  allLoaded(){
    return !this.countiresLoading && !this.peopleLoading;
  }

  submit(): void {
        this.peopleLoading = true;
    this.personService.savePerson(this.person)
      .subscribe(p => {
        this.router.navigate(['/people']);
      })
  }
}
