class Scene1 extends Scene {
  message = "场景1";
  entityList = [];
  static instance = null;

  init() {
    this.entityList = [];
    var teleport = new Entity();
    teleport.name = "传送门";
    var forward = new Interact();
    forward.name = "前进";
    forward.use = function () {
      alert("move forward");
      sceneController.loadScene(Scene2.getInstance());
      // sceneController.scene = Scene2.getInstance();
    };
    teleport.interactList = [forward];
    this.entityList = [teleport];
  }
}
