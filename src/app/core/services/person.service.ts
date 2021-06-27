import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  persons: Person[] = [
    {
      id: 1,
      firstName: 'Janey',
      lastName: 'Claxton',
      email: 'jclaxton0@posterous.com',
      gender: 'Polygender',
      dni: 8625583,
    },
    {
      id: 2,
      firstName: 'Sandor',
      lastName: 'Dronsfield',
      email: 'sdronsfield1@pcworld.com',
      gender: 'Female',
      dni: 4889940,
    },
    {
      id: 3,
      firstName: 'Feliks',
      lastName: 'Chadwin',
      email: 'fchadwin2@state.gov',
      gender: 'Genderqueer',
      dni: 43728201,
    },
    {
      id: 4,
      firstName: 'Esma',
      lastName: 'Killock',
      email: 'ekillock3@altervista.org',
      gender: 'Genderqueer',
      dni: 8967639,
    },
    {
      id: 5,
      firstName: 'Moses',
      lastName: 'Veregan',
      email: 'mveregan4@slideshare.net',
      gender: 'Genderqueer',
      dni: 36664240,
    },
    {
      id: 6,
      firstName: 'Myrtia',
      lastName: 'Murrish',
      email: 'mmurrish5@wikia.com',
      gender: 'Genderqueer',
      dni: 42779847,
    },
    {
      id: 7,
      firstName: 'Addy',
      lastName: 'Keppy',
      email: 'akeppy6@github.io',
      gender: 'Polygender',
      dni: 24133235,
    },
    {
      id: 8,
      firstName: 'Petunia',
      lastName: 'Dullard',
      email: 'pdullard7@wikispaces.com',
      gender: 'Agender',
      dni: 30696175,
    },
    {
      id: 9,
      firstName: 'Barbra',
      lastName: 'Guinn',
      email: 'bguinn8@twitter.com',
      gender: 'Polygender',
      dni: 490983,
    },
    {
      id: 10,
      firstName: 'Tobin',
      lastName: 'Billinge',
      email: 'tbillinge9@seesaa.net',
      gender: 'Non-binary',
      dni: 34731999,
    },
  ];
  constructor() {}

  getAll(){
    return this.persons;
  }

  getPerson(id:number){
    return this.persons.find((person) => person.id === id);
  }
}
