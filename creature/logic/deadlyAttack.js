class DeadlyAttack {
  owner = null;
  target = null;
  targetPart = null;
  battle = null;
  work() {
   // alert(this.owner.actionPoint);
    while (this.owner.actionPoint > 0)
      try {
        this.owner.action["attack"].use();
      } catch {
        Config.getLogController().log(this.owner.name + "无法攻击！");
      }

    //this.battle.battleNext();
  }
}
