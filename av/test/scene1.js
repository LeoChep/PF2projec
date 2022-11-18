class Scene1 extends Scene {
  title = "";
  message =
    "你是个造访奥塔里（Otari）的流浪冒险家，这是座星石岛（the Starstone Isle）海岸边的小镇，而星石岛则是被一位古代神祇从大洋中抬升出来的巨大岛屿。奥塔里以木材和优质木船闻名，但这并不是让你在这里的原因——你来此是为寻求冒险！" +
    "\n" +
    "传闻一头凶猛的野兽正在捕食镇子上的家畜，镇长向任何可以终结这份威胁的英雄提供了10金币的赏金。这笔钱够你花上一个月了！" +
    "\n" +
    "在附近一家名叫乌鸦之桶（Crow’s Casks）的酒馆打听了之后，你了解到大多数袭击都发生在镇子的西侧，离海岸不远。这似乎是你开始搜寻的最佳地点。";
  entityList = [];
  static instance = null;

  init() {
    this.entityList = [];
    var teleport = new Entity();
    teleport.name =
      "你收拾好行李，沿着满布礁石的海岸出发，开始你的狩猎。没过多久，你就找到了一个黑暗神秘的洞窟入口。巨大的爪印通向黑暗中。";
    var func = function () {
      Config.getSceneController().loadScene(Scene13.getInstance());
    };
    var forward = Interact.createNew("forward", func);
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
