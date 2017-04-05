import { Component, OnInit } from '@angular/core';
import {PersonService} from '../service/person.service'
import {CountryService} from '../service/country.service'

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

   person: any;
   countries : any;
  constructor(private personService :PersonService,  private activatedRoute: ActivatedRoute, private countryService: CountryService
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
}
