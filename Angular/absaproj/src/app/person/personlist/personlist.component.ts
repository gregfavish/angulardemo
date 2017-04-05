import { Component, OnInit } from '@angular/core';
import {PersonService} from '../service/person.service'

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css'],
      providers: [PersonService]

})
export class PersonlistComponent implements OnInit {
    people: any;

  constructor(private personService :PersonService) { }

  ngOnInit() {
      this.personService.getPeople().subscribe(
        res=>this.people=res
        );
  }

}
