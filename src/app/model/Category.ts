class Category {

  private id: string;
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  set id(id:string){
    this.id = id;
  }
}
