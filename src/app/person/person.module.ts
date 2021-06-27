import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonsComponent } from './components/persons/persons.component';
import { PersonComponent } from './components/person/person.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';


@NgModule({
  declarations: [
    PersonsComponent,
    PersonComponent,
    PersonDetailsComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }
