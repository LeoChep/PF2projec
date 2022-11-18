class Creature {
  name = undefined;
  initBonus = 0;
  init = 0;
  ac = 0;
  ab = 0;
  hp = 20;
  party = "friendly";
  logic = new Logic();
  action = {};
  rollInit() {
    var ri = roll() + this.initBonus;
    return ri;
  }
}
