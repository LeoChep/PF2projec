class Scene13 extends Scene {
  title = "";
  message =
    "注意到通向洞窟中的痕迹，你躲在了附近的灌木丛中，希望能够伏击到生活在此处的邪恶野兽。几分钟后，你听到了什么东西接近的声音，还有大量湿皮毛在空气中散发的气味。" +
    "\n" +
    "从灌木丛中走出来的是一匹消瘦，肮脏的狼，嘴里叼着一只死鸡。它似乎刚刚狩猎完回家。显然，这就是一直在捕食农民动物的野兽。你等着它靠近，然后拔出你的短剑，跳出来发起攻击。" +
    "\n" +
    "你现在正在和一匹狼战斗！你知道这野兽无法被驯服，必须杀死才能保证农民家畜的安全。你和狼轮流进行攻击彼此。你攻击掷20面骰（简称为d20），并加上你的攻击加值（attack bonus）（代表你持用武器的技能）。如果总数大于等于狼的盔甲等级（Armor Class）（简称为AC），则攻击命中并造成伤害。从狼的生命值（Hit Points）（简称为HP）。要击倒狼，你必须将狼的HP减至0以下。在狼的回合，它会攻击你——狼掷骰d20，加上它的攻击加值，将结果与你的AC比较。如果狼将你的HP减至0以下，你就会死亡。";
  entityList = [];
  teleport = null;
  static instance = null;
  creatureList = [];
  init() {
    var teleport = new Entity();
    this.teleport = teleport;
    teleport.name ="裂缝"
     
    teleport.hidden = true;
    var func = function () {
      Config.getSceneController().loadScene(Scene2.getInstance());
    
    };
    var forward = Interact.createNew("forward", func);
    teleport.interactList = [forward];
    teleport.hidden = true;
    this.entityList = [teleport];

    var wolf = new Creature();
    wolf.name = "wolf";
    wolf.logic = new DeadlyAttack();
    wolf.logic.owner = wolf;
    wolf.logic.target = player;
    wolf.initBonus=0;
    wolf.ab = 5;
    var wolfBit = new BasicAttack();
    wolfBit.actionPoint = 1;
    wolfBit.damage = 4;
    wolf.action["attack"] = wolfBit;
    wolfBit.target = player;
    wolfBit.owner = wolf;
    wolf = ProxyMan.getProxy(wolf);
    console.log("rool wolf")
    wolf.rollInit();
    console.log(wolf.rollInit())
    
    this.creatureList = [wolf];
  }
  action() {
    var wolf = null;
    for (var i = 0; i < this.creatureList.length; i++) {
      if (
        this.creatureList[i] != null &&
        this.creatureList[i].name === "wolf"
      ) {
        wolf = this.creatureList[i];
        alert("野生的狼跳了出来！");
      }
    }
    if (wolf != null) {
      Config.getLogController().log(this.message);
      alert("战斗开始！");
      this.message = "你现在正在和一匹狼战斗！你知道这野兽无法被驯服，必须杀死才能保证农民家畜的安全。你和狼轮流进行攻击彼此。你攻击掷20面骰（简称为d20），并加上你的攻击加值（attack bonus）（代表你持用武器的技能）。如果总数大于等于狼的盔甲等级（Armor Class）（简称为AC），则攻击命中并造成伤害。从狼的生命值（Hit Points）（简称为HP）。要击倒狼，你必须将狼的HP减至0以下。在狼的回合，它会攻击你——你为狼掷骰d20，加上它的攻击加值，将结果与你的AC比较。如果狼将你的HP减至0以下，你就会死亡。将你的HP和狼的HP都记录在一张草稿纸上。";
      var battle = new Battle();
      wolf.logic.battle = battle;
      Config.battleController.battle = battle;
      new Watcher("hp", (obj, watch, args) => {
        if (args[0] <= 0) {
          alert("战斗结束");
          battle.battleEnd();
          this.creatureList=[]
          Config.getLogController().log(
            "你跳到一旁，躲开了狼咆哮着的嘴，将你的剑深深刺入它的侧面。这个可怜的生物嚎叫着，倒在淤泥中，一动不动。你擦干净剑刃，然后走进洞窟中，来确定这是否是唯一一只狼\n" +
              "当你的眼睛适应黑暗后，你发现自己身处于一个小洞窟中，那显然是野兽的家。这里散发着湿毛皮的气味，遍地还有腐烂的肉渣和骨头——这是之前受害者的证据。不过更有趣的是，你注意到了洞窟的后方。\n" +
              "远处墙上有一道裂缝通向黑暗中，而在它上方，石头上刻一个符号，看上去像是个宝箱。当你靠近时，你意识到这道裂缝实际上是一个地下通道的入口——它可能是某些被遗忘宝藏的埋藏处。"
          );
          this.message= "远处墙上有一道裂缝通向黑暗中，而在它上方，石头上刻一个符号，看上去像是个宝箱。当你靠近时，你意识到这道裂缝实际上是一个地下通道的入口——它可能是某些被遗忘宝藏的埋藏处。";
          Config.battleController.battle = null;
          this.teleport.hidden = false;
        }
      }).watch("after", wolf);
      battle.battleJoiner = [wolf, player];
      battle.startBattle(battle.battleJoiner);
      //console.log(this.creatureList);
    }
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
