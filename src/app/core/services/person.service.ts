import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { personsData } from '../constants/persons-static-data';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons$: BehaviorSubject<Person[]>;
  persons: Array<Person> = [];
  constructor() {
    this.persons$ = new BehaviorSubject([]);
    this.persons = personsData;
  }

  getAll() {
    this.persons$.next(this.persons);
  }

  add(person: Person) {
    this.persons.push(person);
  }

  edit(person: Person) {
    let findElem = this.persons.find(p => p.id == person.id);

    findElem.name = person.name;
    findElem.number = person.number;
    findElem.model = person.model;
    findElem.cpu = person.cpu;
    findElem.ram = person.ram;

    this.persons$.next(this.persons);
  }

  remove(id: number) {

    this.persons = this.persons.filter(p => {
      return p.id != id
    });

    this.persons$.next(this.persons);
  }

}
