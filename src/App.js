import MenuRecommendController from './controllers/MenuRecommendController.js';
import MenuRecommend from './domain/MenuRecommend.js';

class App {
  #controller;

  constructor() {
    this.#controller = new MenuRecommendController(new MenuRecommend());
  }

  async play() {
    this.#controller.startService();
  }
}

export default App;
