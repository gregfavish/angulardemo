import { Component, OnInit } from '@angular/core';
import {PersonService} from '../service/person.service'
import { ActivatedRoute,Router } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
  ,      providers: [PersonService]

})
export class PersonEditComponent implements OnInit {

   person: any;
  constructor(private personService :PersonService,  private activatedRoute: ActivatedRoute,
) { }

  ngOnInit() {
    //  this.route.params
    // // (+) converts string 'id' to a number
    // .switchMap((params: any) => this.personService.getPerson(+params['id']))
    // .subscribe(res=>this.person=res);

    this.activatedRoute.params.subscribe(params => {
            let id = params['id'];

            this.personService.getPerson(id)
                .subscribe(p => {
                    this.person = p;
                })
        });
  }
}
