class Action {
  owner = null;
  target = null;
  result = null;
  actionPoint = 0;
  use() {
    this.actionPointCost();
  }
  actionPointCost() {
    this.owner.actionPoint = this.owner.actionPoint - this.actionPoint;
  }
}
