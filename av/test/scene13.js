class Scene13 extends Scene {
  title = "";
  message =
    "注意到通向洞窟中的痕迹，你躲在了附近的灌木丛中，希望能够伏击到生活在此处的邪恶野兽。几分钟后，你听到了什么东西接近的声音，还有大量湿皮毛在空气中散发的气味。" +
    "\n" +
    "从灌木丛中走出来的是一匹消瘦，肮脏的狼，嘴里叼着一只死鸡。它似乎刚刚狩猎完回家。显然，这就是一直在捕食农民动物的野兽。你等着它靠近，然后拔出你的短剑，跳出来发起攻击。" +
    "\n" +
    "你现在正在和一匹狼战斗！你知道这野兽无法被驯服，必须杀死才能保证农民家畜的安全。你和狼轮流进行攻击彼此。你攻击掷20面骰（简称为d20），并加上你的攻击加值（attack bonus）（代表你持用武器的技能）。如果总数大于等于狼的盔甲等级（Armor Class）（简称为AC），则攻击命中并造成伤害。从狼的生命值（Hit Points）（简称为HP）。要击倒狼，你必须将狼的HP减至0以下。在狼的回合，它会攻击你——狼掷骰d20，加上它的攻击加值，将结果与你的AC比较。如果狼将你的HP减至0以下，你就会死亡。";
  entityList = [];
  static instance = null;
  creatureList = [];
  init() {
    var wolf = new Creature();
    wolf.name = "wolf";
    wolf.logic = new DeadlyAttack();
    wolf.logic.owner = wolf;
    wolf.logic.target = player;
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
      }
    }
    if (wolf != null) {
      var battle = new Battle();
      wolf.logic.battle = battle;
      Config.battleController.battle = battle;
      battle.battleJoiner = [this.creatureList[0], player];
      battle.startBattle(battle.battleJoiner);
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
