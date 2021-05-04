export class Person {
  id?: number;
  name: string;
  number: number;
  model: string;
  cpu:string;
  ram:string;
  //  name: any

  constructor(id: number = null, name: string = '', number: number = 0, model: string = '', cpu: string = '', ram: string = '') {
    this.id = id;
    this.name = name;
    this.number = number;
    this.model = model;
    this.cpu = cpu;
    this.ram = ram;
  }
}

