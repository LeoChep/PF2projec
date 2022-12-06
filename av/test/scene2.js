class Scene2 extends Scene {
  message = "克服恐惧后，你挤进缝隙进入另一侧的狭窄通道中，只有来自上方的微弱光线。蜘蛛网和灰尘表明，已经许久无人光顾这条路了。往前走，通道逐渐变宽，形成一个石室，然后向左延伸。\n"+
  "小洞窟右边的墙上有一帘苔藓，由洞窟顶上滴落的水滋养生长。一些东西看起很奇怪，但在你没有成功通过一次察觉（Perception）检定前，可能根本注意不到它。\n"+
  "你的察觉表明了你注意事物的能力。要尝试一次察觉检定，掷骰一次d20并加上你的察觉加值，此处为+4。一旦你完成掷骰，将总值与困难等级（Difficulty Class）（DC）比较，此处为15。如果你的结果大于等于DC，那么你就获得成功！";
  entityList = [];
  static instance = null;
  creatureList = [];
  init() {
    this.entityList = [];

    this.entityList = [];
  }
  action() {}
}
