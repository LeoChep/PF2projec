class Battle {
  battleJoiner = [];
  nowInit = 999;
  log = [];
  endFlag = false;

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
          this._actionPoint=value;
          if (this._actionPoint <= 0) this.battle.battleNext();
        },
      });
      creature._hp = creature.hp;
      Object.defineProperty(creature, "hp", {
        get: function () {
          return this._hp;
        },
        set: function (value) {
          this._hp = value;
          console.log("sett" + this._hp);
          if (this._hp <= 0) {
           // this.battle = null;
            Config.getLogController().log(this.name + "死亡");
          }
        },
      });
      creature.actionPoint = 3;
      console.log("now creature of"+ creature.name+" is "+creature.actionPoint)
    }
    this.battleJoiner.sort(this.sortInit);
    this.battleNext();
    console.log(this);
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
      activtor.actionPoint = 3;
      console.log("now is " + activtor.name + " turn");
      activtor.logic.work();
    } else {
      this.nowInit = 999;
      biggestInit = -99;
      this.battleNext();
    }
   // console.log(this.nowInit);
  }

  battleEnd() {
    //this.battleJoiner = [];
    //this.endFlag = true;
    console.log("战斗结束");
  }
}
