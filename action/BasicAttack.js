class BasicAttack extends Action {
  owner = null;
  target = null;
  damage = 0;
  result = null;
  actionPoint = 1;
  use() {
    console.log(this);
    if (this.target == null) {
      alert("请选择目标");
      return;
    }
    if (this.owner.ab + roll() >= this.target.ac) {
      this.log(this.owner.name + "hit!" + this.damage);
      this.target.hp -= this.damage;
    } else {
      this.log(this.owner.name + "miss!");
    }
    super.actionPointCost();
  }
  log(s) {
    Config.getLogController().log(s);
  }
}
