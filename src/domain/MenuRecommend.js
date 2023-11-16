import MenuMaker from './models/MenuMaker.js';

class MenuRecommend {
  #coach;
  #hateMenus = [];
  #recommendedCategory;
  #recommendedMenus = [];

  constructor(coachHateMenus, recommendedCategory) {
    this.#coach = Object.keys(coachHateMenus);
    this.#hateMenus = coachHateMenus[this.#coach];
    this.#recommendedCategory = recommendedCategory;
    this.#createRecommendMenus();
  }

  getRecommendMenus() {
    return this.#recommendedMenus;
  }

  #createRecommendMenus() {
    for (let i = 0; i < 5; i++) {
      const menuMaker = new MenuMaker(
        this.#recommendedCategory[i],
        this.#hateMenus,
        this.#recommendedMenus
      );
      const recommendMenu = menuMaker.getMenu();

      this.#recommendedMenus.push(recommendMenu);
    }
  }
}

export default MenuRecommend;
