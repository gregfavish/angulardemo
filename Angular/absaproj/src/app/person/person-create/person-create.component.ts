import { Component, OnInit } from '@angular/core';
import {CountryService} from '../service/country.service'
import {PersonService} from '../service/person.service'
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
  ,      providers: [PersonService,CountryService]

})
export class PersonCreateComponent implements OnInit {
   person:any;
   countries : any;

  constructor(private personService :PersonService,  private activatedRoute: ActivatedRoute, private countryService: CountryService,private router: Router){}

  ngOnInit() {
      this.countryService.getCountries().subscribe(
        res=>this.countries=res
        );

    this.person = {};
    this.person.name = "";
    this.person.surname = "";
    this.person.countryId = "";
  }

 submit() :void {
    this.personService.savePerson(this.person)
                .subscribe(p => {
      this.router.navigate(['/people']);
                })
  }
}
