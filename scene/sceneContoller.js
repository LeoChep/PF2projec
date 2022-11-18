class SceneController {
  scene = null;
  loadScene(newScene) {
    this.scene = newScene;
    console.log(this.scene);
    this.scene.action();
  }
}
