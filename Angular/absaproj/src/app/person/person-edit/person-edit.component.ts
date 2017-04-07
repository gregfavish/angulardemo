import { Component, OnInit } from '@angular/core';
import {PersonService} from '../service/person.service'
import {CountryService} from '../service/country.service'
import {Person} from '../person'
import {Country} from '../country'

import { ActivatedRoute,Router } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
  ,      providers: [PersonService,CountryService]

})
export class PersonEditComponent implements OnInit {

   person: Person;
   countries : Array<Country>;
  constructor(private personService :PersonService,  private activatedRoute: ActivatedRoute, private countryService: CountryService,private router: Router
) { }

  ngOnInit() {
      this.countryService.getCountries().subscribe(
        res=>this.countries=res
        );

    this.activatedRoute.params.subscribe(params => {
            let id = params['id'];

            this.personService.getPerson(id)
                .subscribe(p => {
                    this.person = p;
                })
        });       
  }

  submit() :void {
    this.personService.savePerson(this.person)
                .subscribe(p => {
      this.router.navigate(['/people']);
                })
  }
}
