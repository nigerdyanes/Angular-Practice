import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonsComponent } from './components/persons/persons.component';
import { PersonComponent } from './components/person/person.component';

const routes: Routes = [
  {
    path:'',
    component: PersonsComponent,
  },
  {
    path:'person/:idPerson',
    component: PersonComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
