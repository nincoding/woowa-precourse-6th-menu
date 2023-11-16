import CategoryMaker from '../domain/models/CategoryMaker.js';
import NameValidator from '../domain/validators/NameValidator.js';
import HateMenuValidator from '../domain/validators/HateMenuValidator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import errorHandler from '../utils/errorHandler.js';

class MenuRecommendController {
  #service;
  #names;
  #coachsHateMenus = {};
  #recommendedCategory = [];

  constructor(MenuRecommend) {
    this.#service = MenuRecommend;

    OutputView.printStartMessage();
  }

  async startService() {
    await this.#initService();

    const recommendData = this.#getRecommendServiceData();

    this.#printRecommendService(recommendData);
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

  #getRecommendServiceData() {
    this.#createRecommendCategories();

    const instances = {};
    const data = {};
    for (const [name, hateMenus] of Object.entries(this.#coachsHateMenus)) {
      instances[name] = new this.#service({ [name]: hateMenus }, this.#recommendedCategory);

      data[name] = instances[name].getRecommendMenus();
    }
    data['카테고리'] = this.#recommendedCategory;
    data['구분'] = ['월요일', '화요일', '수요일', '목요일', '금요일'];

    return data;
  }

  #createRecommendCategories() {
    while (this.#recommendedCategory.length < 5) {
      const categoryMaker = new CategoryMaker(this.#recommendedCategory);
      const recommendCategory = categoryMaker.getCategory();

      this.#recommendedCategory.push(recommendCategory);
    }
  }

  #printRecommendService(recommendData) {
    OutputView.printResultMessage();
    OutputView.printGenerateMenuTable(recommendData);
    OutputView.printEndMessage();
  }
}

export default MenuRecommendController;
