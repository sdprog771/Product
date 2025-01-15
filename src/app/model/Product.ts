class Product {

  private id: string;
  public name: string;
  public description: string;
  public position: string;

  constructor(name: string){
    this.name = name;
  }

  set id(id:string){
    this.id = id;
  }
}
