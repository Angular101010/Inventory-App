export class Person {
  id?: number;
  name: string;
  number: number;
  model: string;
  // name: any;

  constructor(id: number = null, name: string = '', number: number = 0, model: string = '') {
    this.id = id;
    this.name = name;
    this.number = number;
    this.model = model;
  }
}

