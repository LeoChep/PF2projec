class Battle {
  battleJoiner = [];
  nowInit = 999;

  startBattle(creatures) {
    this.battleJoiner = creatures;
    console.log(this.battleJoiner);
    for (var i = 0; i < this.battleJoiner.length; i++) {
      var creature = this.battleJoiner[i];
      creature.init = roll() + creature.initBonus;
    }
    this.battleJoiner.sort(this.sortInit);
  }

  sortInit(b, a) {
    return a.init - b.init;
  }

  battleNext() {
    var activtor;
    var biggestInit = 0;
    for (var i = 0; i < this.battleJoiner.length; i++) {
      var creature = this.battleJoiner[i];
      if (creature.init > biggestInit && creature.init < this.nowInit) {
        activtor = creature;
        biggestInit = creature.init;
      }
    }
    if (biggestInit != 0) {
      this.nowInit = biggestInit;
      creature.logic.work();
    } else {
      this.nowInit = 999;
    }
  }
}
