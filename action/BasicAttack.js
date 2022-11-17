class BasicAttack {
  owner = null;
  target = null;
  damage = 0;
  use() {
    if (this.owner.ab + roll() >= this.target.ac) {
      alert(this.owner.name + "hit!" + this.damage);
    }
  }
}
