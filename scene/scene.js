class Scene {
  owner = null;
  creature = [];
  entityList = [];
  message = "";
  static instance = null;
  static getInstance() {
    if (this.instance == null) {
      var scene = new this();
      //console.log(scene);
      scene.init();
      this.instance = scene;
      return scene;
    } else {
      return this.instance;
    }
  }
  init() {}
  action() {}
}
