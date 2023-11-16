import MenuRecommendController from './controllers/MenuRecommendController.js';

class App {
  #controller;

  constructor() {
    this.#controller = new MenuRecommendController();
  }

  async play() {
    this.#controller.startService();
  }
}

export default App;
