export class Product {

  public id: string;
  public name: string | undefined;
  public description: string | undefined;
  public position: string | undefined;

  constructor(id: string, name?: string, description?: string, position?: string){
    this.id = id;
    this.name = name;
    this.description = description;
    this.position = position;
  }
}
