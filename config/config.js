class Config {
  static sceneController = new SceneController();
  static getSceneController() {
    return Config.sceneController;
  }
  static setSceneController(sceneController) {
    Config.sceneController = sceneController;
  }
  static battleController = new BattleController();
  static getBattleController() {
    return Config.battleController;
  }
  static setBattleController(battleController) {
    Config.battleController = battleController;
  }
  static logController = new LogController();

  static getLogController() {
    return Config.logController;
  }
  static setLogController(logController) {
    Config.logController = logController;
  }
}
var config = new Config();
