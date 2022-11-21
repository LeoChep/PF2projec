class Battle {
  battleJoiner = [];
  nowInit = 999;
  log = [];

  startBattle(creatures) {
    this.battleJoiner = creatures;
    console.log(this.battleJoiner);
    for (var i = 0; i < this.battleJoiner.length; i++) {
      var creature = this.battleJoiner[i];
      creature.init = creature.rollInit();
      creature.battle = this;
      Object.defineProperty(creature, "actionPoint", {
        get: function () {
          return this._actionPoint;
        },
        set: function (value) {
          this._actionPoint = value;
          console.log("sett" + this._actionPoint);
          if (this._actionPoint <= 0) this.battle.battleNext();
        },
      });
      creature.actionPoint = 3;
    }
    this.battleJoiner.sort(this.sortInit);
    this.battleNext();
  }

  sortInit(b, a) {
    return a.init - b.init;
  }

  battleNext() {
    var activtor;
    var biggestInit = -99;

    for (var i = 0; i < this.battleJoiner.length; i++) {
      var creature = this.battleJoiner[i];
      if (creature.init > biggestInit && creature.init < this.nowInit) {
        activtor = creature;
        biggestInit = creature.init;
      }
    }
    if (biggestInit != -99) {
      this.nowInit = biggestInit;
      activtor.logic.work();
      activtor.actionPoint = 3;
    } else {
      this.nowInit = 999;
      biggestInit = -99;
      this.battleNext();
    }
    console.log(this.nowInit);
  }
}
