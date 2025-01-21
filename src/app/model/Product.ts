export class Product {

  public id: string;
  public name: string;
  public description: string;
  public position: string;

  constructor(id: string, name: string, description: string, position: string){
    this.id = id;
    this.name = name;
    this.description = description;
    this.position = position;
  }
}
