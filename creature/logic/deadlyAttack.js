class DeadlyAttack {
  owner = null;
  target = null;
  targetPart = null;
  battle = null;
  work() {
    try {
      this.owner.action["attack"].use();
    } catch {
      Config.getLogController().log(this.owner.name + "无法攻击！");
    }
    this.battle.battleNext();
  }
}
