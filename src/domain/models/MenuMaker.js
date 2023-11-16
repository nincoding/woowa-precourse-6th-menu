import { Random } from '@woowacourse/mission-utils';
import parseString from '../../utils/parseString.js';
import { MENU } from '../../constants/constant.js';

class MenuMaker {
  #category;
  #hateMenus;
  #recommendedMenus;
  #menu;

  constructor(category, hateMenus, recommendedMenus) {
    this.#category = category;
    this.#hateMenus = hateMenus;
    this.#recommendedMenus = recommendedMenus;
    this.#menu = this.#recommendMenu(category);
  }

  getMenu() {
    while (this.#isValidCotainMenu()) {
      this.#menu = this.#recommendMenu(this.#category);
    }

    return this.#menu;
  }

  #recommendMenu(category) {
    const menus = parseString(MENU[category]);
    const menusIndex = menus.map((_, index) => index);
    const recommendMenuIndex = Random.shuffle(menusIndex)[0];

    return menus[recommendMenuIndex];
  }

  #isValidCotainMenu() {
    return this.#hateMenus.includes(this.#menu) || this.#recommendedMenus.includes(this.#menu);
  }
}

export default MenuMaker;
