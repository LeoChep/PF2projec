class Scene1 extends Scene {
  message = "场景1";
  entityList = [];
  static instance = null;

  init() {
    this.entityList = [];
    var teleport = new Entity();
    teleport.name = "传送门";
    var func = function () {
      alert("move forward");
      sceneController.loadScene(Scene2.getInstance());
      // sceneController.scene = Scene2.getInstance();
    };
    var forward=Interact.createNew("forward",func)
    teleport.interactList = [forward];
    this.entityList = [teleport];
  }

  /**
   * 期望写法
   * entityLiST=[A,B,C,D]
   * mapping=[{entity:A,interaction:[a,b,c]}]
   * 
   * a(){
   * }
   * 
   */
}
