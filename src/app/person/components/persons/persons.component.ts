import { Component, OnInit } from '@angular/core';
import { PersonService } from "../../../core/services/person.service";
import { Person } from '../../../core/models/person.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person[];

  constructor(
    private personService:PersonService
  ) { }

  ngOnInit(): void {
    this.persons = this.personService.getAll();
  }

}
