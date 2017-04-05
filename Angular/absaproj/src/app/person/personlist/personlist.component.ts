import { Component, OnInit } from '@angular/core';
import {PersonService} from '../service/person.service'
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css'],
      providers: [PersonService]

})
export class PersonlistComponent implements OnInit {
    people: any;

  constructor(private personService :PersonService,  private router: Router,
) { }

  ngOnInit() {
      this.personService.getPeople().subscribe(
        res=>this.people=res
        );
  }


   onSelect(person : any) : any {
     this.router.navigate(['/personEdit', person.personId]);

  }


}
