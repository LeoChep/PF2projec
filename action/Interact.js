class Interact {
  name = "";

  use() {}

  static createNew(name,func){
    var interact=new Interact();
    interact.name=name;
    interact.use=func;
    console.log(func)
    return interact;
  }
}
