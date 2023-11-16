import NameValidator from '../domain/validators/NameValidator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import errorHandler from '../utils/errorHandler.js';

class MenuRecommendController {
  #service;
  #names;

  constructor(MenuRecommend) {
    this.#service = MenuRecommend;

    OutputView.printStartMessage();
  }

  async startService() {
    await this.#initService();

    console.log(this.#names, '유효한이름들');
  }

  async #initService() {
    const printError = (message) => OutputView.printErrorMessage(message);

    await errorHandler(async () => await this.#requireValidNames(), printError);
  }

  async #requireValidNames() {
    const inputNames = await InputView.getNames();

    NameValidator.validate(inputNames);

    this.#names = inputNames;
  }
}

export default MenuRecommendController;
