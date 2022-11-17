class DeadlyAttack {
  owner = null;
  target = null;
  targetPart = null;
  battle = null;
  work() {
    this.owner.action["attack"].use();
    this.battle.battleNext();
  }
}
