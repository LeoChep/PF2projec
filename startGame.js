var player = new Creature() || {};
player.name = "player";
player.ab = 7;
player.ac = 17;
player.initbonus = 4;
player.hp = 20;
player.party = "players";
player.logic = new Logic();
player.action["meleeAttack"] = new BasicAttack();
player.action["meleeAttack"].owner = player;
player.action["meleeAttack"].damage = 6;

var sceneController = Config.getSceneController();
sceneController.scene = Scene1.getInstance();
sceneController.scene.init();
