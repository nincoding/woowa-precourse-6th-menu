import NameValidator from '../domain/validators/NameValidator.js';
import HateMenuValidator from '../domain/validators/HateMenuValidator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import errorHandler from '../utils/errorHandler.js';

class MenuRecommendController {
  #service;
  #names;
  #coachsHateMenus = {};

  constructor(MenuRecommend) {
    this.#service = MenuRecommend;

    OutputView.printStartMessage();
  }

  async startService() {
    await this.#initService();

    console.log(this.#coachsHateMenus);
  }

  async #initService() {
    const printError = (message) => OutputView.printErrorMessage(message);

    await errorHandler(async () => await this.#requireValidNames(), printError);
    await errorHandler(async () => await this.#requireValidHateMenus(), printError);
  }

  async #requireValidNames() {
    const inputNames = await InputView.getNames();

    NameValidator.validate(inputNames);

    this.#names = inputNames;
  }

  async #requireValidHateMenus() {
    for (const name of this.#names) {
      const hateMenus = await InputView.getHateMenus(name);

      HateMenuValidator.validate(hateMenus);

      this.#coachsHateMenus[name] = hateMenus;
    }
  }
}

export default MenuRecommendController;
