class Config {
  static sceneController = new SceneController();
  static getSceneController() {
    return Config.sceneController;
  }
  static setSceneController(sceneController) {
    Config.sceneController = sceneController;
  }
}
var config = new Config();
