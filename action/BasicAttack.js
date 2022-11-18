class BasicAttack {
  owner = null;
  target = null;
  damage = 0;
  result = null;
  use() {
    if (this.owner.ab + roll() >= this.target.ac) {
      this.log(this.owner.name + "hit!" + this.damage);
    }
  }
  log(s) {
    Config.getLogController().log(s);
  }
}
