import { Component, OnInit } from '@angular/core';
import { PersonService } from '../service/person.service'
import { ActivatedRoute, Router } from "@angular/router";
import { ButtonComponent } from "../../shared/button/button.component";
import { Person } from '../person'

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css'],
  providers: [PersonService]

})
export class PersonlistComponent implements OnInit {
  people: Array<Person>;
  loading: boolean;

  constructor(private personService: PersonService, private router: Router,
  ) {
    this.loading = true;
  }

  ngOnInit() {
    this.personService.getPeople().subscribe(
      res => { this.people = res, this.loading = false }
    );
  }

  onSelect(person: Person) {
    this.router.navigate(['/people', person.personId]);
  }

  displayAlert(): any {
    alert("This was sent from the parent component")
  }
}
