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
      console.log("roolinit")
      creature.battle = this;
      Object.defineProperty(creature, "actionPoint", {
        get: function () {
          return this._actionPoint;
        },
        set: function (value) {

          console.log("cost action point")
         console.log(this.battle)
          this._actionPoint=value;
          if (this._actionPoint <= 0) {
          console.log("cost all point")
            this.battle.battleNext();
          }
        },
      });
      creature._hp = creature.hp;
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
